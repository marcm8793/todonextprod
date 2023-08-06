"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function FloatingLogo() {
  return (
    <div className="flex items-center justify-center h-60">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="" onClick={() => signIn()}>
              NexToDo: Getting things done{" "}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Let's go</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default FloatingLogo;
