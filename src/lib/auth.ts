// import { db } from "@/db/db";
// import { betterAuth } from "better-auth";
// import { nextCookies } from "better-auth/next-js";

// export const auth = betterAuth({
//   database: drizzleAdapter(db, {
//     provider: "sqlite", // or "mysql", "sqlite"
//   }),
//   socialProviders: {
//     github: {
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     },
//   },
//   plugins: [nextCookies()], // make sure this is the last plugin in the array
// });

import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // database: drizzleAdapter(db, {
  //   provider: "sqlite", // or "mysql", "sqlite"
  // }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
