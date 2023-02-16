import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { setupURLPolyfill } from 'react-native-url-polyfill';

setupURLPolyfill();

const supabaseUrl = 'https://rmyvwdubxvsmvzrkbdvx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteXZ3ZHVieHZzbXZ6cmtiZHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0MjY4NjQsImV4cCI6MTk5MjAwMjg2NH0.hrWdOsnqCnk2vgeKyjEoKWqzTy4_l6SrcmFlkvA5X3Y';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  }
);