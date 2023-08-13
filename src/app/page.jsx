import Nav from "@/components/Nav";
import FloatingLogo from "@/components/FloatingLogo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NewTodoCard from "@/components/NewTodoCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <Nav />
        <NewTodoCard />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <FloatingLogo />
    </div>
  );
}
