"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import Avatar from "react-avatar";
import { LogOut, User, Mail, GanttChartSquare } from "lucide-react";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            {session.user.image ? (
              <Image
                id="image"
                src={session.user.image}
                alt="Profile image"
                width={50}
                height={50}
                className="rounded-full"
              ></Image>
            ) : (
              <Avatar
                name={session.user.name}
                className="rounded-full"
                alt="Profile image"
                id="image"
                size="50"
              />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="relative flex">
              <GanttChartSquare className="mr-2 h-4 w-4" />
              My Account
            </DropdownMenuLabel>

            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              {session.user.name}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              {session.user.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button
              onClick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: "/",
                })
              }
            >
              <DropdownMenuItem className="w-auto">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }
  return (
    <>
      <Link className={buttonVariants()} href="/signIn">
        Sign In
      </Link>
    </>
  );
}
