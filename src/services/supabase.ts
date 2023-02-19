import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { setupURLPolyfill } from 'react-native-url-polyfill';
import { SUPABASE_URL, SUPABASE_KEY } from 'react-native-dotenv';

setupURLPolyfill();

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

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