import { getSession } from "@/lib/auth/auth";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    // Handle unauthenticated state
    return <div>Please login to view your profile</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user?.name}</p>
      {/* Display other user information */}
    </div>
  );
}
