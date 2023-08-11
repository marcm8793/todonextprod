"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              id="image"
              src={session.user.image}
              alt="Profile image"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
            <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <button onClick={() => signOut()}>Log out</button>
          </DropdownMenuContent>
        </DropdownMenu>
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
