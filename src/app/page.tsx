import AddMessageButton from "@/components/add-message-button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getMessages } from "@/db/queries";

export default async function Home() {
  const messages = await getMessages();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
              className="flex items-center justify-between p-4 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow"
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
    </div>
  );
}
