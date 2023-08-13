import React from "react";
import { buttonVariants } from "@/components/ui/button.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

function FloatingLogo() {
  return (
    <div className="flex items-center justify-center h-60">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link className={buttonVariants()} href="/signIn">
              NexToDo: Getting things done{" "}
            </Link>
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
