import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Queue from "@/models/queue";
import dbConnection from "@/config/dbConnection";

export const POST = async (req) => {
  await dbConnection();

  try {
    const { admin } = await req.json();
    const queueData = await Queue.find({
      roomId: admin,
      status: "queued",
    }).sort({ votes: -1 });
    if (!queueData) {
      return NextResponse.json(
        { message: "No songs in queue", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: queueData, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong", success: false },
      { status: 500 }
    );
  }
};
