import { NextResponse } from "next/server";
import youtubesearchapi from "youtube-search-api";
import Queue from "@/models/queue";
import dbConnection from "@/config/dbConnection";

export const POST = async (req) => {
  try {
    await dbConnection();
    return NextResponse.json(
      { message: "Song added", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", success: false, error },
      { status: 500 }
    );
  }
};
