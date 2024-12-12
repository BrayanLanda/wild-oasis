import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://jclsfsglyjllujgtiasy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjbHNmc2dseWpsbHVqZ3RpYXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDU0OTMsImV4cCI6MjA0MDQyMTQ5M30.U0SM9iEibL5PJLjpgT8f4j0VrkXzraHGn_otAdzsZ94';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;