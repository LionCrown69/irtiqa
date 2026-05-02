import { createClient } from '@supabase/supabase-js';

// These would normally be loaded from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example schema type for Programmatic SEO tables
export type PseoLocation = {
  id: string;
  name: string; // "London", "New York"
  slug: string; // "london", "new-york"
  region: string; // "en-gb", "en-us"
};

export type PseoIndustry = {
  id: string;
  name: string; // "Healthcare", "Legal Firms"
  slug: string; // "healthcare", "legal-firms"
  revenueLeakageStat: string; // "£1.2M", "$1.5M"
};
