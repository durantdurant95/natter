import { db } from "./db";
import { messagesTable } from "./schema";

export async function getMessages() {
  return await db.select().from(messagesTable);
}
