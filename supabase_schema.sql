-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. RIDERS TABLE
create table public.riders (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  phone_number text not null,
  email text not null,
  date_of_birth date not null,
  gender text not null,
  city text not null,
  state text not null,
  pin_code text not null,
  whatsapp_consent boolean default false,
  status text default 'pending', -- pending, approved, rejected
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. HUB CAPTAINS TABLE
create table public.hub_captains (
  id uuid default uuid_generate_v4() primary key,
  first_name text not null,
  last_name text not null,
  phone_number text not null,
  email text not null,
  date_of_birth date not null,
  gender text not null,
  city text not null,
  state text not null,
  pin_code text not null,
  whatsapp_consent boolean default false,
  resume_url text, -- Store the URL/Path to the file in Storage
  status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. STORAGE BUCKET setup (You must do this in Supabase Dashboard -> Storage)
-- Create a new public bucket called 'resumes'
-- OR run policies if doing it strictly via SQL (requires more setup)
-- For now, please create a bucket named 'resumes' in the dashboard and set it to Public (or set proper RLS policies).

-- ROW LEVEL SECURITY (RLS) POLICIES
-- Create policies to allow INSERT for anyone (anon) but SELECT only for admins
alter table public.riders enable row level security;
alter table public.hub_captains enable row level security;

-- Policy: Allow anyone to insert (register)
create policy "Enable insert for everyone" on public.riders for insert with check (true);
create policy "Enable insert for everyone" on public.hub_captains for insert with check (true);

-- Policy: Allow only service_role (backend/admin) to select/view
-- (By default, if no select policy exists, anon users cannot see data, which is what we want for privacy)
