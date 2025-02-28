import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
    const SUPABASE_URL = "https://zjfmqadbbvsvesatxivm.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqZm1xYWRiYnZzdmVzYXR4aXZtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDY1MDM4MSwiZXhwIjoyMDU2MjI2MzgxfQ.yjzRZpSi3ioXiL8cq4uVmVi_NzGKzs6L9NfigrMzZVA";
    export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
