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
                  <Link href="/">
                    <Button variant="link">
                      <p>Tasks</p>
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Link href="/notes">
                    <Button variant="link">
                      <p>Notes</p>
                    </Button>
                  </Link>
                </div>
              </div>
              <SheetFooter className="justify-start">
                <SheetClose asChild className="justify-start"></SheetClose>
              </SheetFooter>
              <footer className="absolute bottom-0 pb-12">
                <p className="text-xs">
                  &copy; MARC MANSOUR &nbsp;{new Date().getFullYear()}
                </p>
              </footer>
            </SheetContent>
          </Sheet>
        </div>
        <div className="space-x-3 flex items-center">
          <Link
            href="https://github.com/marcm8793/todonextprod"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
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
