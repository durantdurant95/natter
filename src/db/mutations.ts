"use server"; // This is a server action
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { messagesTable } from "./schema";

// Random message contents
const randomMessages = [
  "Hello there!",
  "How's your day going?",
  "Just checking in",
  "What's new?",
  "Random thought: what if clouds had WiFi?",
  "Did you know that honey never spoils?",
  "Coding is fun!",
  "Turso + Drizzle is a great combo",
  "Remember to drink water today",
  "Time for a coffee break",
];

// Random senders
const randomSenders = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
];

export async function insertRandomMessage() {
  const randomContent =
    randomMessages[Math.floor(Math.random() * randomMessages.length)];
  const randomSender =
    randomSenders[Math.floor(Math.random() * randomSenders.length)];

  const message = {
    content: randomContent,
    sender: randomSender,
    timestamp: new Date().toISOString(),
  };

  const result = await db
    .insert(messagesTable)
    .values(message)
    .returning({ insertedId: messagesTable.id });

  revalidatePath("/"); // Revalidate the path to update the UI
  return result[0]; // Return the inserted message
}
