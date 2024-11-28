import dbConnection from "@/config/dbConnection";
import Queue from "@/models/queue";
import { NextResponse } from "next/server";

export const DELETE = async (req) => {
  await dbConnection();
  try {
    const { songId } = await req.json();
    const song = await Queue.findByIdAndDelete(songId);
    if (!song) {
      return NextResponse.json(
        { message: "Song not found", success: false },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Song removed", success: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", success: false },
      { status: 500 }
    );
  }
};
