import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
import crypto from 'node:crypto';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('[ERR] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  process.exit(1);
}

// Inputs fournis
const EMAIL = 'fayeemmanuel@outlook.com';
const USERNAME = 'manuel';
const EXTERNAL_UUID = '6f97adb1-71ee-41f5-b660-65d959ce8992';
const REDIRECT_TO = process.env.ADMIN_INVITE_REDIRECT_TO || `${(process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000')}/#confirmation`;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

function generateSecurePassword(length = 20) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{};:,.?/';
  const bytes = crypto.randomBytes(length);
  return Array.from(bytes, (b) => charset[b % charset.length]).join('');
}

async function ensureUserAndSendInvite(email) {
  const { data, error } = await supabase.auth.admin.inviteUserByEmail(email, { redirectTo: REDIRECT_TO });
  if (!error && data?.user?.id) {
    return { user: data.user, newlyInvited: true };
  }
  const { data: usersList, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) throw listErr;
  const existing = usersList?.users?.find((u) => u.email === email);
  if (!existing) throw new Error('Invite failed and user not found in listUsers');
  return { user: existing, newlyInvited: false };
}

async function promoteToAdmin(userId) {
  const { error } = await supabase.from('user_roles').upsert({ user_id: userId, role: 'admin' }, { onConflict: 'user_id' });
  if (error) {
    const msg = error?.message || '';
    if (msg.includes("public.user_roles") || msg.includes('user_roles')) {
      console.warn('[WARN] user_roles table missing; relying on user_metadata.role=admin');
      return;
    }
    throw error;
  }
}

async function setTempPasswordAndMetadata(userId, tempPassword) {
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    password: tempPassword,
    user_metadata: { username: USERNAME, external_uuid: EXTERNAL_UUID },
  });
  if (error) throw error;
}

async function updateMetadata(userId) {
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: { username: USERNAME, external_uuid: EXTERNAL_UUID, role: 'admin' },
  });
  if (error) throw error;
}

async function main() {
  try {
    const { user, newlyInvited } = await ensureUserAndSendInvite(EMAIL);
    await promoteToAdmin(user.id);

    if (newlyInvited) {
      const tempPassword = generateSecurePassword(20);
      await setTempPasswordAndMetadata(user.id, tempPassword);

      const secretsDir = new URL('../secrets/', import.meta.url);
      const secretsPath = secretsDir.pathname;
      if (!fs.existsSync(secretsPath)) fs.mkdirSync(secretsPath, { recursive: true });
      const outfile = `${secretsPath}admin_${EMAIL.replace(/[^a-zA-Z0-9]/g, '_')}_temp_pwd.txt`;
      fs.writeFileSync(outfile, `Email: ${EMAIL}\nUsername: ${USERNAME}\nSupabaseUserId: ${user.id}\nExternalUUID: ${EXTERNAL_UUID}\nTemporaryPassword: ${tempPassword}\nCreatedAt: ${new Date().toISOString()}\n`);

      console.log('[OK] Admin account ready');
      console.log(`- Supabase User ID: ${user.id}`);
      console.log(`- External UUID associated (metadata): ${EXTERNAL_UUID}`);
      console.log(`- Temporary password stored at: ${outfile}`);
      console.log('- A confirmation/invite email was sent by Supabase.');
    } else {
      await updateMetadata(user.id);
      console.log('[OK] Existing user promoted to admin');
      console.log(`- Supabase User ID: ${user.id}`);
      console.log(`- External UUID associated (metadata): ${EXTERNAL_UUID}`);
      console.log('- No password changed, user already registered.');
    }
  } catch (err) {
    console.error('[ERR] Failed to create/admin user:', err?.message || err);
    process.exit(1);
  }
}

await main();