-- Public schema for VerdoSmart
set search_path = public;

-- Profiles table
create table if not exists profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Preferences table
create table if not exists preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  theme text check (theme in ('light','dark','system')) default 'system',
  language text check (language in ('fr','en')) default 'fr',
  email_notifications boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Login logs
create table if not exists login_logs (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  at timestamptz default now(),
  ip inet,
  user_agent text,
  provider text,
  success boolean default true
);
create index if not exists login_logs_user_id_idx on login_logs(user_id);
create index if not exists login_logs_at_idx on login_logs(at);

-- User roles (simple RBAC)
create table if not exists user_roles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'user',
  created_at timestamptz default now()
);

-- Addresses table
create table if not exists addresses (
  id bigserial primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  name text,
  street text,
  city text,
  postal_code text,
  country text,
  phone text,
  is_default boolean default false,
  created_at timestamptz default now()
);

-- Helper function to check admin role
create or replace function is_admin(uid uuid)
returns boolean language sql stable as $$
  select exists(
    select 1 from user_roles ur
    where ur.user_id = uid and ur.role = 'admin'
  );
$$;

-- RLS enable
alter table profiles enable row level security;
alter table preferences enable row level security;
alter table login_logs enable row level security;
alter table user_roles enable row level security;
alter table addresses enable row level security;

-- RLS policies
create policy "profiles select own or admin" on profiles for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "profiles insert by owner" on profiles for insert
  with check (auth.uid() = user_id or is_admin(auth.uid()));
create policy "profiles update own or admin" on profiles for update
  using (auth.uid() = user_id or is_admin(auth.uid()))
  with check (auth.uid() = user_id or is_admin(auth.uid()));

create policy "preferences select own or admin" on preferences for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "preferences insert by owner" on preferences for insert
  with check (auth.uid() = user_id or is_admin(auth.uid()));
create policy "preferences update own or admin" on preferences for update
  using (auth.uid() = user_id or is_admin(auth.uid()))
  with check (auth.uid() = user_id or is_admin(auth.uid()));

create policy "login_logs select own or admin" on login_logs for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "login_logs insert by owner" on login_logs for insert
  with check (auth.uid() = user_id or is_admin(auth.uid()));

create policy "user_roles select own or admin" on user_roles for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "user_roles insert/update admin only" on user_roles for all
  using (is_admin(auth.uid())) with check (is_admin(auth.uid()));

create policy "addresses select own or admin" on addresses for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "addresses insert by owner" on addresses for insert
  with check (auth.uid() = user_id or is_admin(auth.uid()));
create policy "addresses update own or admin" on addresses for update
  using (auth.uid() = user_id or is_admin(auth.uid()))
  with check (auth.uid() = user_id or is_admin(auth.uid()));

-- Trigger: create profile & preferences on new user
create or replace function handle_new_user()
returns trigger language plpgsql as $$
begin
  insert into profiles (user_id, email, full_name, created_at) values (new.id, new.email, null, now())
  on conflict (user_id) do nothing;
  insert into preferences (user_id) values (new.id)
  on conflict (user_id) do nothing;
  insert into user_roles (user_id, role) values (new.id, 'user')
  on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ================================
-- Commerce: commandes & paiements
-- ================================

-- Orders
create table if not exists orders (
  id bigserial primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','confirmed','paid','cancelled','failed')),
  currency text not null default 'EUR',
  subtotal integer not null default 0,
  shipping_fee integer not null default 0,
  platform_fee integer not null default 0,
  total_amount integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists orders_user_id_idx on orders (user_id);
alter table orders enable row level security;
create policy "orders select own or admin" on orders for select
  using (auth.uid() = user_id or is_admin(auth.uid()));
create policy "orders insert by owner" on orders for insert
  with check (auth.uid() = user_id or is_admin(auth.uid()));
create policy "orders update own or admin" on orders for update
  using (auth.uid() = user_id or is_admin(auth.uid()))
  with check (auth.uid() = user_id or is_admin(auth.uid()));
create policy "orders delete admin only" on orders for delete
  using (is_admin(auth.uid()));

-- Order items
create table if not exists order_items (
  id bigserial primary key,
  order_id bigint not null references orders (id) on delete cascade,
  product_id text not null,
  name text not null,
  quantity integer not null check (quantity > 0),
  unit_price integer not null default 0,
  total_price integer not null default 0
);
create index if not exists order_items_order_id_idx on order_items (order_id);
alter table order_items enable row level security;
create policy "order_items select own or admin" on order_items for select
  using (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))));
create policy "order_items insert owner via order" on order_items for insert
  with check (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))));
create policy "order_items update own or admin" on order_items for update
  using (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))))
  with check (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))));
create policy "order_items delete admin only" on order_items for delete
  using (exists (select 1 from orders o where o.id = order_id and is_admin(auth.uid())));

-- Payments
create table if not exists payments (
  id bigserial primary key,
  order_id bigint not null references orders (id) on delete cascade,
  method text not null check (method in ('card','mobile_money','paypal')),
  amount integer not null,
  status text not null default 'initiated' check (status in ('initiated','succeeded','failed','pending')),
  provider_ref text,
  created_at timestamptz not null default now()
);
create index if not exists payments_order_id_idx on payments (order_id);
alter table payments enable row level security;
create policy "payments select own or admin" on payments for select
  using (exists (select 1 from orders o where o.id in (select order_id from payments p where p.id = id) and (o.user_id = auth.uid() or is_admin(auth.uid()))));
create policy "payments insert owner via order" on payments for insert
  with check (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))));
create policy "payments update own or admin" on payments for update
  using (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))))
  with check (exists (select 1 from orders o where o.id = order_id and (o.user_id = auth.uid() or is_admin(auth.uid()))));

-- Payment transactions
create table if not exists payment_transactions (
  id bigserial primary key,
  payment_id bigint not null references payments (id) on delete cascade,
  status text not null,
  external_id text,
  payload jsonb,
  created_at timestamptz not null default now()
);
create index if not exists payment_transactions_payment_id_idx on payment_transactions (payment_id);
alter table payment_transactions enable row level security;
create policy "payment_tx select own or admin" on payment_transactions for select
  using (
    exists (
      select 1
      from payments p join orders o on o.id = p.order_id
      where p.id = payment_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
  );
create policy "payment_tx insert owner via payment" on payment_transactions for insert
  with check (
    exists (
      select 1 from payments p join orders o on o.id = p.order_id
      where p.id = payment_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
  );

-- Payment logs (debug)
create table if not exists payment_logs (
  id bigserial primary key,
  payment_id bigint references payments (id) on delete cascade,
  transaction_id bigint references payment_transactions (id) on delete set null,
  level text not null default 'info' check (level in ('info','warn','error','debug')),
  message text not null,
  meta jsonb,
  created_at timestamptz not null default now()
);
create index if not exists payment_logs_payment_id_idx on payment_logs (payment_id);
create index if not exists payment_logs_transaction_id_idx on payment_logs (transaction_id);
alter table payment_logs enable row level security;
create policy "payment_logs select own or admin" on payment_logs for select
  using (
    exists (
      select 1 from payments p join orders o on o.id = p.order_id
      where p.id = payment_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
    or exists (
      select 1 from payment_transactions t join payments p on p.id = t.payment_id join orders o on o.id = p.order_id
      where t.id = transaction_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
  );
create policy "payment_logs insert owner via payment/tx" on payment_logs for insert
  with check (
    exists (
      select 1 from payments p join orders o on o.id = p.order_id
      where p.id = payment_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
    or exists (
      select 1 from payment_transactions t join payments p on p.id = t.payment_id join orders o on o.id = p.order_id
      where t.id = transaction_id and (o.user_id = auth.uid() or is_admin(auth.uid()))
    )
  );
