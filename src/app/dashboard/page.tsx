// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

import SignOutButton from "@/components/sign-out-button";

export default async function DashboardPage() {
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });
  // console.log("session", session);
  // if (!session) {
  //   return <div>Unauthorized</div>;
  // }
  return (
    <div>
      <SignOutButton />
    </div>
  );
}
