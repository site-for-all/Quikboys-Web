-- Create table for storing talent pool applications
CREATE TABLE IF NOT EXISTS public.careers_talent_pool (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    linkedin_url TEXT,
    portfolio_url TEXT,
    resume_url TEXT, -- URL from storage bucket
    department TEXT NOT NULL, -- Engineering, Operations, Marketing, etc.
    role_interest TEXT, -- Specific role they are interested in
    experience_years TEXT,
    application_status TEXT DEFAULT 'pending', -- pending, reviewed, contacted, rejected
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Disable Row Level Security (RLS)
ALTER TABLE public.careers_talent_pool DISABLE ROW LEVEL SECURITY;

-- Grant access to anon and authenticated roles
GRANT ALL ON public.careers_talent_pool TO anon;
GRANT ALL ON public.careers_talent_pool TO authenticated;
GRANT ALL ON public.careers_talent_pool TO service_role;

-- Create policy to allow reading only by authenticated staff (optional for now, or just service role)
-- For now, we might leave read access restricted.

-- Create storage bucket for resumes if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('career-documents', 'career-documents', true)
ON CONFLICT (id) DO NOTHING;

-- Policy to allow public uploads to career-documents
CREATE POLICY "Allow public uploads" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'career-documents');

-- Policy to allow public reads (optional, maybe restricted is better but keeping it simple for now)
CREATE POLICY "Allow public reads" ON storage.objects
    FOR SELECT USING (bucket_id = 'career-documents');
