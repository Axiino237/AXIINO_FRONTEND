import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vcgskwyllinutmvtqlgp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZ3Nrd3lsbGludXRtdnRxbGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NjgwODAsImV4cCI6MjA4NzI0NDA4MH0.7Sy_g1u8dQcwumlWADXHNmm5PkDEyrlBOu5FS2FMySA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
