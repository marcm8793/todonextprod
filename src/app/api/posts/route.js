import { getServerSession } from "next-auth/next";
import * as z from "zod";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

//!Z schema validattion
const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

//! GET all the posts of the user
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: user.id,
      },
    });
    return new Response(JSON.stringify(posts));
  } catch (error) {
    // return new Response(null, { status: 500 });
    console.error(error);
  }
}

//! POST create a new post
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const json = await req.json();
    const body = postCreateSchema.parse(json);
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: user.id,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
  }
  return new Response(null, { status: 500 });
}
