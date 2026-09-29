import { createClient } from "@supabase/supabase-js";


export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_TRACKING_MASTERS_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);