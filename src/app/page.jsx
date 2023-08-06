import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NewTodoCard from "@/components/NewTodoCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <Navbar />
        <NewTodoCard />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  );
}
