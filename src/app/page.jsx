import NavBar from "@/components/NavBar";
import MainPage from "@/components/MainPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NewTodoCard from "@/components/NewTodoCard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <NavBar />
        <NewTodoCard />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <MainPage />
    </div>
  );
}
