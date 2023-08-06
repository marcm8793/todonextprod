"use client";
import React from "react";
import LoginBtn from "@/components/LoginButton";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="container flex justify-between items-center p-5">
      <div className="flex items-center">
        <Image src="/note.svg" alt="Logo" width={50} height={50}></Image>
        <p className=" font-extrabold text-blue-800 text-3xl p-2">NextApps</p>
      </div>
      <div className="space-x-5 flex items-center">
        <ModeToggle />
        <LoginBtn />
      </div>
    </div>
  );
}
