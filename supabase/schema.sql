-- Supabase schema for profiles, preferences, login logs, and roles
-- Safe defaults, RLS policies, and new-user bootstrap trigger

create type public.account_role as enum ('user','admin');

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  theme text check (theme in ('light','dark','system')) default 'system',
  language text check (language in ('fr','en')) default 'fr',
  email_notifications boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.login_logs (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  at timestamptz default now(),
  ip inet,
  user_agent text,
  provider text,
  success boolean default true
);
create index if not exists login_logs_user_id_idx on public.login_logs(user_id);
create index if not exists login_logs_at_idx on public.login_logs(at);

create table if not exists public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role public.account_role not null default 'user'
);

-- Helper: check if current user is admin
create or replace function public.is_admin() returns boolean
language sql stable as $$
  select exists(
    select 1 from public.user_roles r
    where r.user_id = auth.uid() and r.role = 'admin'
  );
$$;

-- Bootstrap default rows for new users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles(user_id, email, full_name)
  values (new.id, new.email, null)
  on conflict (user_id) do nothing;

  insert into public.preferences(user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  insert into public.user_roles(user_id, role)
  values (new.id, 'user')
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.preferences enable row level security;
alter table public.login_logs enable row level security;
alter table public.user_roles enable row level security;

-- profiles policies
create policy if not exists "profiles_select_own_or_admin"
on public.profiles for select
to authenticated using (auth.uid() = user_id or public.is_admin());

create policy if not exists "profiles_insert_self"
on public.profiles for insert
to authenticated with check (auth.uid() = user_id);

create policy if not exists "profiles_update_self"
on public.profiles for update
to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- preferences policies
create policy if not exists "preferences_select_own_or_admin"
on public.preferences for select
to authenticated using (auth.uid() = user_id or public.is_admin());

create policy if not exists "preferences_insert_self"
on public.preferences for insert
to authenticated with check (auth.uid() = user_id);

create policy if not exists "preferences_update_self"
on public.preferences for update
to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- login_logs policies
create policy if not exists "login_logs_select_own_or_admin"
on public.login_logs for select
to authenticated using (auth.uid() = user_id or public.is_admin());

create policy if not exists "login_logs_insert_self"
on public.login_logs for insert
to authenticated with check (auth.uid() = user_id);

-- user_roles policies
create policy if not exists "user_roles_select_self_or_admin"
on public.user_roles for select
to authenticated using (auth.uid() = user_id or public.is_admin());

create policy if not exists "user_roles_manage_service_role"
on public.user_roles for all
to authenticated using (auth.role() = 'service_role') with check (auth.role() = 'service_role');
