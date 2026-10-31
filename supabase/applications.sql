-- Run this once in Supabase: SQL Editor -> New query -> paste everything -> Run.
-- It creates the job applications table. Resumes use the private enquiry-files bucket.

create table if not exists public.applications (
  id uuid primary key,
  name text not null,
  phone text not null,
  email text not null,
  role text not null,
  skills text not null,
  state text not null,
  country text not null,
  resume_path text not null,
  resume_name text not null,
  created_at timestamptz not null default now()
);

-- No policies are added, so nobody can read or change this table from a browser.
alter table public.applications enable row level security;
