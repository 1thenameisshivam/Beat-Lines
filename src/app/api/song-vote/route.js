import dbConnection from "@/config/dbConnection";
import Queue from "@/models/queue";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
  await dbConnection();
  try {
    const { songId, admin, user } = await req.json();
    const songVote = await Queue.findOne({
      _id: songId,
      status: "queued",
      roomId: admin,
    });
    if (!songVote) {
      return NextResponse.json(
        { message: "No songs in queue", success: false },
        { status: 404 }
      );
    }
    if (songVote.votedBy.includes(user)) {
      return NextResponse.json(
        { message: "You have already voted", success: false },
        { status: 400 }
      );
    }
    songVote.votes += 1;
    songVote.votedBy.push(user);
    await songVote.save();
    return NextResponse.json({ message: "Vote added", success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong", success: false },
      { status: 500 }
    );
  }
};
