"use client";

import { signOut } from "@/lib/auth-client";

const SignOutButton: React.FC = () => {
  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOutButton;
