import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email || "" },
  });

  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { name, bio, image } = await req.json();

  const newUser = await prisma.user.create({
    data: {
      email: session.user.email || "",
      name,
      bio,
      image,
    },
  });

  return NextResponse.json(newUser);
}

export async function PUT(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { name, bio, image } = await req.json();

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email || "" },
    data: { name, bio, image },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE() {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await prisma.user.delete({
    where: { email: session.user.email || "" },
  });

  return NextResponse.json({ message: "User deleted successfully" });
}