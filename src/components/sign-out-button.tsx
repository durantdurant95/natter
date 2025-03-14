"use client";

import { signOut } from "@/lib/auth/actions";

const SignOutButton: React.FC = () => {
  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOutButton;
