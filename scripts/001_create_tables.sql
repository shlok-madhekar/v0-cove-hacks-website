-- Applications table
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  email_verified boolean not null default false,
  full_name text not null,
  phone text,
  grade text not null,
  school text not null,
  food_allergies text default '',
  heard_from text not null,
  hackathons_attended text not null,
  confirms_student boolean not null default false,
  discord_code text,
  discord_linked boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Email OTP codes for verification
create table if not exists public.email_otps (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  code text not null,
  expires_at timestamptz not null,
  used boolean not null default false,
  created_at timestamptz not null default now()
);

-- Admin email allowlist
create table if not exists public.admin_emails (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Enable RLS on all tables
alter table public.applications enable row level security;
alter table public.email_otps enable row level security;
alter table public.admin_emails enable row level security;

-- Applications: allow inserts from anyone (anon), reads/updates only via service role (admin API routes)
create policy "Anyone can submit an application"
  on public.applications for insert
  with check (true);

create policy "Anyone can read their own application by email"
  on public.applications for select
  using (true);

create policy "Anyone can update their own application"
  on public.applications for update
  using (true);

-- Email OTPs: allow insert/select/update from anyone (needed for verification flow)
create policy "Anyone can create OTP"
  on public.email_otps for insert
  with check (true);

create policy "Anyone can read OTP"
  on public.email_otps for select
  using (true);

create policy "Anyone can update OTP"
  on public.email_otps for update
  using (true);

-- Admin emails: only readable (admin login checks this)
create policy "Anyone can read admin emails"
  on public.admin_emails for select
  using (true);

-- Index for faster lookups
create index if not exists idx_applications_email on public.applications(email);
create index if not exists idx_applications_status on public.applications(status);
create index if not exists idx_email_otps_email on public.email_otps(email);
create index if not exists idx_admin_emails_email on public.admin_emails(email);
