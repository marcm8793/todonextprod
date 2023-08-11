import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

//! 1. GET todo by id
export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Not authorized");
  }
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ todo });
}

//! 2. UPDATE todo by id
export async function UPDATE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json("Not authorized");
  }
  const { id } = params;
  const data = await request.json();

  const updatetodobyID = await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json({ message: "Updated successfully", updatetodobyID });
}
