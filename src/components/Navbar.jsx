import React from "react";
import LoginBtn from "@/components/LoginButton";
import { ModeToggle } from "@/components/ModeToggle";
import { FcTodoList } from "react-icons/fc";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Nav() {
  return (
    <div className="container items-center justify-center">
      <div className=" flex justify-between pt-5 items-center">
        <div className="flex items-center hover:outline rounded-sm hover:bg-slate-100">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center">
                <FcTodoList size={50} />
                <span className=" font-extrabold text-blue-600 text-3xl p-2">
                  NextApps
                </span>
              </button>
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-list-checks"
                  >
                    <path d="m3 17 2 2 4-4" />
                    <path d="m3 7 2 2 4-4" />
                    <path d="M13 6h8" />
                    <path d="M13 12h8" />
                    <path d="M13 18h8" />
                  </svg>
                  &ensp;NextApps
                </SheetTitle>
                <SheetDescription className="justify-start flex">
                  Get things done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Button variant="link">
                    <p>Tasks</p>
                  </Button>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Button variant="link">
                    <p>Notes</p>
                  </Button>
                </div>
              </div>
              <SheetFooter className="justify-start">
                <SheetClose asChild className="justify-start"></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
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
