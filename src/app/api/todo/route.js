import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

//! 1. GET all the todos
export async function GET() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });
  return NextResponse.json({ todos });
}

//! 2. POST a new todo
export async function POST(req) {
  const data = await req.json();
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const todo = await prisma.todo.create({
    data: {
      title: data.title,
      description: data.description,
      userId: user.id,
    },
  });
  return NextResponse.json({ message: "Created successfully", todo });
}

//! 3. DELETE a todo
export async function DELETE(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Not authorized");
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const deleteTodo = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ message: "Successfully deleted", deleteTodo });
}

//! 4. UPDATE a todo
export async function PATCH(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Not authorized");
  }
  const data = await req.json();
  const updateTodo = await prisma.todo.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      completed: data.completed,
      updatedAt: new Date(),
    },
  });
  return NextResponse.json({ message: "Successfully updated", updateTodo });
}
