"use server";
import { signIn, signOut } from "./auth";

export const signInWithGithub = async () => {
  await signIn("github");
};

export const logOut = async () => {
  await signOut();
};
