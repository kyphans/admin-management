import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import getServerSession from "next-auth";
import { config } from "@/auth";

// export async function GET(req: Request) {
//   const result = await prisma.user.findMany();
//   return Response.json({
//     message: "Users fetched successfully",
//     status: "success",
//     data: result,
//   });
// }


export async function GET(req: Request) {
  const session = getServerSession(config);

  if (!session) {
    return new NextResponse("Unauthenticated", { status: 401 });
  }

  try {
    const result = await prisma.user.findMany();

    return NextResponse.json(result);
  } catch (error) {
    console.log("[USERS_GET]", error);
    return new NextResponse("Initial error", { status: 500 });
  }
}
