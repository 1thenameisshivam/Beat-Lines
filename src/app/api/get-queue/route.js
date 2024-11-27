import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Queue from "@/models/queue";
import dbConnection from "@/config/dbConnection";

export const GET = async (req) => {
  await dbConnection();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  try {
    const queueData = await Queue.find({ roomId: user.id, status: "queued" });
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
