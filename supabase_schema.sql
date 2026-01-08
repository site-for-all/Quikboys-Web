-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create riders table
CREATE TABLE riders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Personal Information
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  
  -- Address Fields (NEW)
  address_line_1 VARCHAR(255) NOT NULL,
  address_line_2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pin_code VARCHAR(6) NOT NULL,
  
  -- Documents (NEW - Store file URLs from Supabase Storage)
  aadhaar_card_url TEXT NOT NULL,
  driving_license_url TEXT NOT NULL,
  
  -- Referral System (NEW)
  referral_code VARCHAR(10) UNIQUE NOT NULL,
  referred_by VARCHAR(10) REFERENCES riders(referral_code),
  referral_count INTEGER DEFAULT 0,
  
  -- Status & Metadata
  application_status VARCHAR(20) DEFAULT 'pending',
  whatsapp_consent BOOLEAN DEFAULT false,
  ev_program_interest BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE
);

-- Create index for faster lookups
CREATE INDEX idx_riders_referral_code ON riders(referral_code);
CREATE INDEX idx_riders_phone ON riders(phone_number);
CREATE INDEX idx_riders_email ON riders(email);
CREATE INDEX idx_riders_status ON riders(application_status);

-- Function to generate unique referral code
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS VARCHAR(10) AS $$
DECLARE
  new_code VARCHAR(10);
  code_exists BOOLEAN;
BEGIN
  LOOP
    -- Generate code: QB- + 6 random alphanumeric characters
    new_code := 'QB-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    
    -- Check if code already exists
    SELECT EXISTS(SELECT 1 FROM riders WHERE referral_code = new_code) INTO code_exists;
    
    -- Exit loop if code is unique
    EXIT WHEN NOT code_exists;
  END LOOP;
  
  RETURN new_code;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-generate referral code before insert
CREATE OR REPLACE FUNCTION set_referral_code()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.referral_code IS NULL OR NEW.referral_code = '' THEN
    NEW.referral_code := generate_referral_code();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_referral_code
  BEFORE INSERT ON riders
  FOR EACH ROW
  EXECUTE FUNCTION set_referral_code();

-- Trigger to update referral count when someone uses a referral code
CREATE OR REPLACE FUNCTION increment_referral_count()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.referred_by IS NOT NULL THEN
    UPDATE riders 
    SET referral_count = referral_count + 1,
        updated_at = NOW()
    WHERE referral_code = NEW.referred_by;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_increment_referral
  AFTER INSERT ON riders
  FOR EACH ROW
  EXECUTE FUNCTION increment_referral_count();

-- Trigger to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_timestamp
  BEFORE UPDATE ON riders
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

-- Enable RLS
ALTER TABLE riders ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for registration)
CREATE POLICY "Anyone can register"
ON riders FOR INSERT
WITH CHECK (true);

-- Policy: Users can view their own data
CREATE POLICY "Users can view own data"
ON riders FOR SELECT
USING (auth.uid()::text = id::text OR auth.role() = 'service_role');

-- Policy: Only admins can update
CREATE POLICY "Admins can update"
ON riders FOR UPDATE
USING (auth.role() = 'service_role');

-- HUB CAPTAINS TABLE (Restored basic structure if needed, or we can omit if not specified in detail by new guide but implied by page 'Hub Captain')
-- Ideally we should have a table for hub captains too.
CREATE TABLE hub_captains (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  city VARCHAR(100) NOT NULL,
  resume_url TEXT NOT NULL,
  why_join TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE hub_captains ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can apply as hub captain" ON hub_captains FOR INSERT WITH CHECK (true);

-- PARTNERS TABLE (For Partner With Us page)
CREATE TABLE partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  business_type VARCHAR(50) NOT NULL,
  city VARCHAR(100) NOT NULL,
  daily_deliveries VARCHAR(50) NOT NULL,
  requirements TEXT,
  website TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can apply as partner" ON partners FOR INSERT WITH CHECK (true);

-- STORAGE BUCKETS SETUP --

-- Create 'rider-documents' bucket for Aadhaar/License
INSERT INTO storage.buckets (id, name, public) 
VALUES ('rider-documents', 'rider-documents', true)
ON CONFLICT (id) DO NOTHING;

-- Create 'resumes' bucket for Hub Captains
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies for 'rider-documents'
-- Allow public write (anyone can upload for now, ideally restrict but need auth)
CREATE POLICY "Public Uploads rider-documents" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'rider-documents');

-- Allow public read
CREATE POLICY "Public Read rider-documents" ON storage.objects
FOR SELECT USING (bucket_id = 'rider-documents');

-- Storage Policies for 'resumes'
CREATE POLICY "Public Uploads resumes" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Public Read resumes" ON storage.objects
FOR SELECT USING (bucket_id = 'resumes');
