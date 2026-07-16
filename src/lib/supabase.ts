import { createClient } from '@supabase/supabase-js';

/**
 * Browser Supabase client for the admin area.
 *
 * Uses only the PUBLIC_ (browser-safe) publishable key. All real access
 * control lives in Postgres Row Level Security + Storage policies on the
 * RRFPS project — this key can do nothing without a valid admin session.
 */
const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  // Surfaced in the browser console during dev if the .env is missing.
  console.error('Missing PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});

/** Storage bucket that holds the fire report PDFs (private). */
export const REPORTS_BUCKET = 'fire-reports';
