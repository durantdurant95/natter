"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileButton() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch session data from an API endpoint
    const fetchSession = async () => {
      const response = await fetch("/api/session");
      if (response.ok) {
        const data = await response.json();
        setSession(data.session);
      }
    };

    fetchSession();
  }, []);

  return (
    <button onClick={() => router.push("/profile")} disabled={!session}>
      {session ? "View Profile" : "Login Required"}
    </button>
  );
}
