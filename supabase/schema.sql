create table if not exists public.site_content (
  key text primary key,
  content jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

create table if not exists public.page_configs (
  slug text primary key,
  config jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id),
  updated_at timestamptz not null default now()
);

alter table public.page_configs
  add column if not exists updated_by uuid references auth.users(id);

alter table public.page_configs
  add column if not exists updated_at timestamptz not null default now();

alter table public.page_configs enable row level security;

drop policy if exists "Public can read site content" on public.site_content;
drop policy if exists "Admin can insert site content" on public.site_content;
drop policy if exists "Admin can update site content" on public.site_content;
drop policy if exists "Public can read page configs" on public.page_configs;
drop policy if exists "Admin can insert page configs" on public.page_configs;
drop policy if exists "Admin can update page configs" on public.page_configs;

create policy "Public can read page configs"
  on public.page_configs for select using (true);

create policy "Admin can insert page configs"
  on public.page_configs for insert
  with check (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');

create policy "Admin can update page configs"
  on public.page_configs for update
  using (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');

insert into public.page_configs (slug, config)
values ('links-page', '{
  "title": "Tosin Faith",
  "subtitle": "Website designer, frontend developer, and website obsessed human.",
  "hero": {"image": "", "alt": "Tosin Faith", "position": "center 20%"},
  "colors": {"background": "#ffffff", "card": "#ffcce6", "fade": "#ffcce6"},
  "links": [
    {"text": "GET A BUSINESS WEBSITE TODAY", "url": "/booking"},
    {"text": "WEBSITE TEMPLATES - ONLY $15", "url": "#"},
    {"text": "LEARN TO BUILD A WEBSITE", "url": "#"},
    {"text": "FREE RESOURCES FOR DEVS", "url": "#"},
    {"text": "LAND YOUR FIRST INTERNSHIP", "url": "https://selar.com/m/thetosinfaith"},
    {"text": "HAVE A QUICK CHAT WITH ME", "url": "https://wa.me/2348123539192"},
    {"text": "DFY WEBSITE SETUP", "url": "#"}
  ],
  "socials": {"tiktok": "", "instagram": "", "linkedin": "", "mail": "", "facebook": "", "x": ""},
  "backToWebsiteText": "Back to website",
  "backToWebsiteUrl": "/"
}'::jsonb)
on conflict (slug) do nothing;

alter table public.site_content enable row level security;

create policy "Public can read site content"
  on public.site_content for select
  using (true);

create policy "Admin can insert site content"
  on public.site_content for insert
  with check (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');

create policy "Admin can update site content"
  on public.site_content for update
  using (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');

insert into public.site_content (key, content)
values (
  'site',
  '{
    "homepage": {
      "heroTitle": "I Design & Build Impactful Websites",
      "heroDescription": "Hi! I’m Tee, a website designer, frontend dev, and all-around website obsessed human.",
      "primaryButton": "Let''s Create Your Site",
      "secondaryButton": "Take Me to Portfolio"
    },
    "theme": {
      "primaryColor": "#d82382",
      "accentColor": "#ffffff"
    }
  }'::jsonb
)
on conflict (key) do nothing;

insert into storage.buckets (id, name, public)
values ('site-media', 'site-media', true)
on conflict (id) do nothing;

drop policy if exists "Public can view site media" on storage.objects;
drop policy if exists "Admin can upload site media" on storage.objects;
drop policy if exists "Admin can update site media" on storage.objects;

create policy "Public can view site media"
  on storage.objects for select
  using (bucket_id = 'site-media');

create policy "Admin can upload site media"
  on storage.objects for insert
  with check (bucket_id = 'site-media' and auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');

create policy "Admin can update site media"
  on storage.objects for update
  using (bucket_id = 'site-media' and auth.jwt() ->> 'email' = 'hellotosinfaith@gmail.com');
