"use server";
import { createAuthClient } from "better-auth/react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const authClient = createAuthClient();

export const signInWithGithub = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
  redirect("/dashboard"); // Redirect to the dashboard after sign in
};

export const signOut = async () => {
  await authClient.signOut();
  redirect("/"); // Redirect to the home page after sign out
};

// Server-side function to get session
export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // Only works in Server Components
  });

  return session ?? null;
};
