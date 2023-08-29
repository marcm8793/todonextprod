import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Provider from "@/lib/provider";
import React from "react";
import Nav from "@/components/Navbar.jsx";
import { Footer } from "@/components/footer.jsx";
import { redirect } from "next/navigation";

async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export default async function DashboardLayout({ children }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/signIn");
  }
  return (
    <>
      <Provider>
        <Nav />
        <div className="min-h-screen flex-col space-y-6 flex w-full flex-1 overflow-hidden container  gap-12  md:grid-cols-[200px_1fr]">
          {children}
        </div>
        <Footer className="border-t" />
      </Provider>
    </>
  );
}
