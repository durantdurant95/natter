import { createAuthClient } from "better-auth/client";
import { redirect } from "next/navigation";
const authClient = createAuthClient();

export const signInWithGithub = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
};

export const signOut = async () => {
  await authClient.signOut();
  redirect("/"); // Redirect to the home page after sign out
};
