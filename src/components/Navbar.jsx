"use client";
import React from "react";
import LoginBtn from "@/components/LoginButton";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { FcTodoList } from "react-icons/fc";

function Nav() {
  return (
    <div className="container flex justify-between items-center p-5">
      <div className="flex items-center">
        <FcTodoList size={50} />
        <p className=" font-extrabold text-blue-600 text-3xl p-2">NextApps</p>
      </div>
      <div className="space-x-5 flex items-center">
        <ModeToggle />
        <LoginBtn />
      </div>
    </div>
  );
}

export default Nav;
