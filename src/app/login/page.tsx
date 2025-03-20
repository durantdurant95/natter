import { auth } from "@/auth/auth";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import LoginImage from "../../../public/login-image.jpg"; // Adjust the path as needed

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <Link href="/" className="text-xl font-extrabold text-primary">
          Natter
        </Link>
        <LoginForm />
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={LoginImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-75 brightness-50 contrast-125"
        />
      </div>
    </div>
  );
}
