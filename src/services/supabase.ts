import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { setupURLPolyfill } from 'react-native-url-polyfill';

setupURLPolyfill();

const supabaseUrl = 'https://fqgffupgucxeexczdvgn.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZ2ZmdXBndWN4ZWV4Y3pkdmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1NzQyNjQsImV4cCI6MTk4MjE1MDI2NH0.gwoRsNZCg1QR32PCtvhpgy9Z9Z_5FTlIz_ZAo_t36RY';

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export async function signInWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUpWithEmail({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return supabaseClient.auth.signUp({
    email,
    password,
  });
}
