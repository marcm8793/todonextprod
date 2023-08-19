import { notFound, redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { Editor } from "@/components/notes/editor";
import { getServerSession } from "next-auth/next";
import { Footer } from "@/components/footer";

async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}

async function getPostForUser(postId, userId) {
  return await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
}

export default async function EditorPage({ params }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signIn");
  }

  const post = await getPostForUser(params.postId, user.id);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Editor
        post={{
          id: post.id,
          title: post.title,
          content: post.content,
          published: post.published,
        }}
      />
      <Footer />
    </>
  );
}
