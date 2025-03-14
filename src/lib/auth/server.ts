import { headers } from "next/headers";
import { auth } from "./auth";

// Server-side function to get session
export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // Only works in Server Components
  });

  return session ?? null;
};
