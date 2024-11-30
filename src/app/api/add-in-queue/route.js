import { NextResponse } from "next/server";
import youtubesearchapi from "youtube-search-api";
import Queue from "@/models/queue";
import dbConnection from "@/config/dbConnection";

export const POST = async (req) => {
  try {
    await dbConnection();
    const { id, link, userid, addedBy } = await req.json();
    const queueSize = 15;

    const musicInQueue = await Queue.countDocuments({
      roomId: userid,
      status: "queued",
    });

    if (musicInQueue >= queueSize) {
      return NextResponse.json(
        {
          message: "Queue is full",
          sucess: false,
        },
        { status: 400 }
      );
    }
    const isAlreadyInQueue = await Queue.findOne({
      roomId: userid,
      songUrl: link,
    });
    if (isAlreadyInQueue) {
      return NextResponse.json(
        {
          message: "Song already in queue",
          sucess: false,
        },
        { status: 400 }
      );
    }
    const data = await youtubesearchapi.GetVideoDetails(id);
    console.log(data);
    if (!data) {
      return NextResponse.json(
        {
          message: "Invalid URL Or Video Not Found",
          sucess: false,
        },
        { status: 400 }
      );
    }
    // Extract the thumbnail
    const thumbnail =
      data?.thumbnail.thumbnails[4]?.url || // Try to fetch the 4th thumbnail
      data?.thumbnail.thumbnails[0]?.url ||
      "https://www.electronicshub.org/wp-content/uploads/2021/09/YOUTUBE-THUMBNIL-NOT-SHOWING.jpg"; // Fallback to the first thumbnail

    console.log(thumbnail);
    const newSong = new Queue({
      roomId: userid,
      title: data.title,
      songUrl: link,
      thumbnail: thumbnail,
      addedBy: addedBy,
    });
    await newSong.save();
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
