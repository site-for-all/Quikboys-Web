-- MASTER REPAIR SCRIPT
-- Run this ENTIRE file in Supabase SQL Editor to clean up and rebuild everything.

-- 1. CLEANUP (Drop tables if they exist to start fresh)
DROP TABLE IF EXISTS riders CASCADE;
DROP TABLE IF EXISTS hub_captains CASCADE;
DROP TABLE IF EXISTS partners CASCADE;

-- 2. ENABLE EXTENSIONS
create extension if not exists "uuid-ossp";

-- 3. CREATE RIDERS TABLE
CREATE TABLE riders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(20) NOT NULL,
  address_line_1 VARCHAR(255) NOT NULL,
  address_line_2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  pin_code VARCHAR(6) NOT NULL,
  aadhaar_card_url TEXT NOT NULL,
  driving_license_url TEXT NOT NULL,
  referral_code VARCHAR(10) UNIQUE NOT NULL,
  referred_by VARCHAR(10),
  referral_count INTEGER DEFAULT 0,
  application_status VARCHAR(20) DEFAULT 'pending',
  whatsapp_consent BOOLEAN DEFAULT false,
  ev_program_interest BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE
);

-- 4. CREATE HUB CAPTAINS TABLE
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

-- 5. CREATE PARTNERS TABLE
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

-- 6. DISABLE RLS (To allow public access without policy headaches)
ALTER TABLE riders DISABLE ROW LEVEL SECURITY;
ALTER TABLE hub_captains DISABLE ROW LEVEL SECURITY;
ALTER TABLE partners DISABLE ROW LEVEL SECURITY;

-- 7. RECREATE FUNCTIONS & TRIGGERS
CREATE OR REPLACE FUNCTION generate_referral_code()
RETURNS VARCHAR(10) 
SECURITY DEFINER
AS $$
DECLARE
  new_code VARCHAR(10);
  code_exists BOOLEAN;
BEGIN
  LOOP
    new_code := 'QB-' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 6));
    SELECT EXISTS(SELECT 1 FROM riders WHERE referral_code = new_code) INTO code_exists;
    EXIT WHEN NOT code_exists;
  END LOOP;
  RETURN new_code;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_referral_code()
RETURNS TRIGGER 
SECURITY DEFINER
AS $$
BEGIN
  IF NEW.referral_code IS NULL OR NEW.referral_code = '' THEN
    NEW.referral_code := generate_referral_code();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_set_referral_code ON riders;
CREATE TRIGGER trigger_set_referral_code
  BEFORE INSERT ON riders
  FOR EACH ROW
  EXECUTE FUNCTION set_referral_code();

CREATE OR REPLACE FUNCTION increment_referral_count()
RETURNS TRIGGER 
SECURITY DEFINER
AS $$
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

DROP TRIGGER IF EXISTS trigger_increment_referral ON riders;
CREATE TRIGGER trigger_increment_referral
  AFTER INSERT ON riders
  FOR EACH ROW
  EXECUTE FUNCTION increment_referral_count();

CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER 
SECURITY DEFINER
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_timestamp ON riders;
CREATE TRIGGER trigger_update_timestamp
  BEFORE UPDATE ON riders
  FOR EACH ROW
  EXECUTE FUNCTION update_timestamp();

-- 8. STORAGE BUCKETS & POLICIES (With Safety Checks)
INSERT INTO storage.buckets (id, name, public) VALUES ('rider-documents', 'rider-documents', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true) ON CONFLICT (id) DO NOTHING;

-- Safely recreate storage policies
DROP POLICY IF EXISTS "Public Uploads rider-documents" ON storage.objects;
CREATE POLICY "Public Uploads rider-documents" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'rider-documents');

DROP POLICY IF EXISTS "Public Read rider-documents" ON storage.objects;
CREATE POLICY "Public Read rider-documents" ON storage.objects FOR SELECT USING (bucket_id = 'rider-documents');

DROP POLICY IF EXISTS "Public Uploads resumes" ON storage.objects;
CREATE POLICY "Public Uploads resumes" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resumes');

DROP POLICY IF EXISTS "Public Read resumes" ON storage.objects;
CREATE POLICY "Public Read resumes" ON storage.objects FOR SELECT USING (bucket_id = 'resumes');
