"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React from "react";

function SupabaseProvider({ children }) {
  // CHƯA
  const [supabaseClient] = useState(() => createClientComponentClient());
  //

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}

export default SupabaseProvider;
