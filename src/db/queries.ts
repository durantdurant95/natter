import { db } from "./db";
import { messagesTable } from "./schema/messages";

export async function getMessages() {
  return await db.select().from(messagesTable);
}
