import AddMessageButton from "@/components/add-message-button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getMessages } from "@/db/queries";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const messages = await getMessages();
  const sessionResponse = await auth.api.getSession({
    headers: await headers(),
  });
  const session = sessionResponse;
  console.log("session", session);
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 flex-col">
      <h1 className="text-4xl font-bold text-center">Turso Chat</h1>
      <p className="text-lg text-center">
        This is a simple chat app using Turso as the database. It uses Drizzle
        ORM to interact with the database.
      </p>
      {messages.length > 0 ? (
        <ul className="w-full max-w-md">
          {messages.map((message) => (
            <li
              key={message.id}
              className="flex items-center justify-between p-4 mb-2 rounded-lg shadow"
            >
              <div>
                <p className="text-sm font-semibold">{message.sender}</p>
                <p className="text-gray-500">{message.content}</p>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages yet. Click the button below to add one.</p>
      )}

      <AddMessageButton />
      <ModeToggle />
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
