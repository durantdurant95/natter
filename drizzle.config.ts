// This file is used to configure the drizzle-kit CLI for database migrations.
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
