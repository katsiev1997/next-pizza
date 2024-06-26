import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const users = await prisma.user.findMany();
  return NextResponse.json({
    users,
  });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const user = await prisma.user.create({
    data: body,
  });
  return NextResponse.json({
    message: "Пользователь успешно зарегистрирован!",
    user,
  });
};
