import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ilzjizezltmqszohpxdl.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsemppemV6bHRtcXN6b2hweGRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODE4NzUsImV4cCI6MjA1ODE1Nzg3NX0.OicTakX7fEDZtPcNYWfe7azXvFD5nHLmWJuujSuqNEM'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);