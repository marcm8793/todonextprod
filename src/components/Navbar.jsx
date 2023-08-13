import React from "react";
import LoginBtn from "@/components/LoginBtn";
import { ModeToggle } from "@/components/ModeToggle";
import { FcTodoList } from "react-icons/fc";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function Nav() {
  return (
    <div className="container items-center justify-center">
      <div className=" flex justify-between pt-5 items-center">
        <div className="flex items-center hover:outline rounded-sm hover:bg-slate-100">
          <Link href="/">
            <button className="flex items-center">
              <FcTodoList size={50} />
              <span className=" font-extrabold text-blue-600 text-3xl p-2">
                NextApps
              </span>
            </button>
          </Link>
        </div>
        <div className="space-x-5 flex items-center">
          <ModeToggle />
          <LoginBtn />
        </div>
      </div>
      <div className="container justify-between items-center my-4">
        <Separator />
      </div>
    </div>
  );
}
export default Nav;
