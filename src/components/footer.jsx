import * as React from "react";

export function Footer() {
  return (
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 border-t">
      <div className="   flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <p className="text-center text-sm leading-tight md:text-left">
          Built by{" "}
          <a
            href="https://twitter.com/Marc87240"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Marc Mansour
          </a>
          . Hosted on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/marcm8793/todonextprod"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
