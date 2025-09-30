import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gbcwnzekjaofobfrmdhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiY3duemVramFvZm9iZnJtZGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNDY0NjYsImV4cCI6MjA3NDYyMjQ2Nn0.RiccQN08ntDEZXBuCSYBBPRR5lOHGIXIsVNIjWVtS2s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
