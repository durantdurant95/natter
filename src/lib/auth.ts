import { db } from "@/db/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),
  //   socialProviders: {
  //     github: {
  //      clientId: process.env.GITHUB_CLIENT_ID,
  //      clientSecret: process.env.GITHUB_CLIENT_SECRET,
  //     }
  //  },
  plugins: [nextCookies()], // make sure this is the last plugin in the array
});
