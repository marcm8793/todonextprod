import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { EmptyPlaceholder } from "@/components/notes/empty-placeholder";
import { DashboardHeader } from "@/components/notes/header";
import { PostCreateButton } from "@/components/notes/post-create-button";
import { PostItem } from "@/components/notes/post-item";
import { DashboardShell } from "@/components/notes/shell";

export const metadata = {
  title: "Notes",
};

async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/signIn");
  }

  const posts = await prisma.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <>
      <DashboardShell>
        <DashboardHeader heading="Notes" text="Create and manage notes.">
          <PostCreateButton />
        </DashboardHeader>
        <div>
          {posts?.length ? (
            <div className="divide-y divide-border rounded-md border">
              {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="post" />
              <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                You don&apos;t have any posts yet. Start creating content.
              </EmptyPlaceholder.Description>
              <PostCreateButton variant="outline" />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </>
  );
}
