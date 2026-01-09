-- HUB OPERATIONS SCHEMA (Replaces Hub Captains & Hub Executives)

-- 1. CLEANUP OLD TABLES
DROP TABLE IF EXISTS hub_captains CASCADE;
DROP TABLE IF EXISTS hub_executives CASCADE;
DROP TABLE IF EXISTS hub_operations_applications CASCADE;

-- 2. CREATE HUB OPERATIONS APPLICATIONS TABLE
CREATE TABLE hub_operations_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Role Selection
  role VARCHAR(50) NOT NULL, -- 'hub_manager', 'hub_executive', 'hub_captain'
  
  -- Personal Information
  full_name VARCHAR(200) NOT NULL,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  gender VARCHAR(20) NOT NULL,
  
  -- Address Fields
  address_line_1 VARCHAR(255) NOT NULL,
  address_line_2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pin_code VARCHAR(6) NOT NULL,
  
  -- Professional Information
  why_join TEXT, -- Motivation (Optional)
  
  -- Documents
  resume_url TEXT,
  
  -- Referral System
  referral_code VARCHAR(15) UNIQUE NOT NULL, -- Format: QB-HUB-XXXXXX
  referred_by VARCHAR(15), -- Optional referrer code
  referral_count INTEGER DEFAULT 0,
  
  -- Meta
  application_status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. DISABLE RLS
ALTER TABLE hub_operations_applications DISABLE ROW LEVEL SECURITY;

-- 4. FUNCTIONS & TRIGGERS

-- Function: Generate Referral Code
CREATE OR REPLACE FUNCTION generate_hub_referral_code()
RETURNS VARCHAR(15) AS $$
DECLARE
  new_code VARCHAR(15);
  code_exists BOOLEAN;
BEGIN
  LOOP
    -- Generate code: QB-HUB- + 6 random alphanumeric characters
    new_code := 'QB-HUB-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    
    -- Check if code already exists
    SELECT EXISTS(
      SELECT 1 FROM hub_operations_applications WHERE referral_code = new_code
    ) INTO code_exists;
    
    -- Exit loop if code is unique
    EXIT WHEN NOT code_exists;
  END LOOP;
  
  RETURN new_code;
END;
$$ LANGUAGE plpgsql;

-- Trigger: Auto-Set Referral Code
CREATE OR REPLACE FUNCTION set_hub_referral_code()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.referral_code IS NULL OR NEW.referral_code = '' THEN
    NEW.referral_code := generate_hub_referral_code();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_set_hub_referral_code ON hub_operations_applications;
CREATE TRIGGER trigger_set_hub_referral_code
  BEFORE INSERT ON hub_operations_applications
  FOR EACH ROW
  EXECUTE FUNCTION set_hub_referral_code();

-- Trigger: Increment Referral Count
CREATE OR REPLACE FUNCTION increment_hub_referral_count()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.referred_by IS NOT NULL THEN
    UPDATE hub_operations_applications 
    SET referral_count = referral_count + 1,
        updated_at = NOW()
    WHERE referral_code = NEW.referred_by;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_increment_hub_referral ON hub_operations_applications;
CREATE TRIGGER trigger_increment_hub_referral
  AFTER INSERT ON hub_operations_applications
  FOR EACH ROW
  EXECUTE FUNCTION increment_hub_referral_count();

-- Trigger: Update Timestamp
CREATE OR REPLACE FUNCTION update_hub_ops_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_hub_ops_timestamp ON hub_operations_applications;
CREATE TRIGGER trigger_update_hub_ops_timestamp
  BEFORE UPDATE ON hub_operations_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_hub_ops_timestamp();

-- 5. BUCKET SETUP (Ensure storage bucket exists)
INSERT INTO storage.buckets (id, name, public) VALUES ('hub-operations-resumes', 'hub-operations-resumes', true) ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public Uploads hub-operations-resumes" ON storage.objects;
CREATE POLICY "Public Uploads hub-operations-resumes" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'hub-operations-resumes');

DROP POLICY IF EXISTS "Public Read hub-operations-resumes" ON storage.objects;
CREATE POLICY "Public Read hub-operations-resumes" ON storage.objects FOR SELECT USING (bucket_id = 'hub-operations-resumes');
