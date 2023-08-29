import Nav from "@/components/Navbar";
import HomePage from "@/components/MainPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NewTodoCard from "@/components/NewTodoCard";
import { Footer } from "@/components/footer.jsx";

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
      <HomePage />
      <Footer className="border-t" />
    </div>
  );
}
