import { env } from "@/data/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

console.log("DATABASE_URL:", env.DATABASE_URL);

export const db = drizzle({
  connection: env.DATABASE_URL,
});
