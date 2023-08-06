"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>
          <Image
            id="image"
            src={session.user.image}
            alt="Profile image"
            width={50}
            height={50}
            className="rounded-full"
          ></Image>
        </button>
      </>
    );
  }
  return (
    <>
      <Button variant="" onClick={() => signIn()}>
        Sign In
      </Button>
    </>
  );
}
