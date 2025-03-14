import AddMessageButton from "@/components/add-message-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getMessages } from "@/db/queries";
import { getSession } from "@/lib/auth/server";
import Link from "next/link";

export default async function Home() {
  const messages = await getMessages();
  const session = await getSession();
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
      {session ? (
        <div className="text-center">
          <p className="text-sm">Logged in as {session.user.name}</p>
          <Avatar>
            <AvatarImage src={session.user.image ?? ""} alt="avatar" />
            <AvatarFallback>
              {session.user.name?.charAt(0)?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-sm">You are not logged in.</p>
        </div>
      )}
      <AddMessageButton />
      <ModeToggle />
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
