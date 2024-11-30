// @ts-ignore
import { NextResponse } from "next/server";
const youtubesearchapi = require("youtube-search-api");
import Queue from "@/models/queue";
import dbConnection from "@/config/dbConnection";

export const POST = async (req) => {
  try {
    // Establish database connection
    await dbConnection();

    // Parse request body
    const { id, link, userid, addedBy } = await req.json();

    // Define the queue size limit
    const queueSize = 15;

    // Check the current queue size
    const musicInQueue = await Queue.countDocuments({
      roomId: userid,
      status: "queued",
    });

    if (musicInQueue >= queueSize) {
      return NextResponse.json(
        {
          message: "Queue is full",
          success: false,
        },
        { status: 400 }
      );
    }

    // Check if the song is already in the queue
    const isAlreadyInQueue = await Queue.findOne({
      roomId: userid,
      songUrl: link,
    });

    if (isAlreadyInQueue) {
      return NextResponse.json(
        {
          message: "Song already in queue",
          success: false,
        },
        { status: 400 }
      );
    }

    // Fetch video details from YouTube API
    const data = await youtubesearchapi.GetVideoDetails(id);
    console.log("YouTube API response data:", data);

    if (!data) {
      return NextResponse.json(
        {
          message: "Invalid URL or video not found",
          success: false,
        },
        { status: 400 }
      );
    }

    // Extract thumbnail with a fallback
    const thumbnail =
      data?.thumbnail?.thumbnails?.[4]?.url || // Fetch the 5th thumbnail
      data?.thumbnail?.thumbnails?.[0]?.url || // Fallback to the 1st thumbnail
      "https://www.electronicshub.org/wp-content/uploads/2021/09/YOUTUBE-THUMBNIL-NOT-SHOWING.jpg";

    console.log("Thumbnail URL:", thumbnail);

    // Create a new song in the queue
    const newSong = new Queue({
      roomId: userid,
      title: data.title,
      songUrl: link,
      thumbnail: thumbnail,
      addedBy: addedBy,
    });

    console.log("New song object:", newSong);

    // Save the new song to the database
    await newSong.save();

    // Return success response
    return NextResponse.json(
      { message: "Song added", success: true },
      { status: 200 }
    );
  } catch (error) {
    // Log the error with stack trace for debugging
    console.error("Error occurred:", error);

    // Return detailed error response
    return NextResponse.json(
      {
        message: "Internal Server Error",
        success: false,
        error: error.message,
        stack: error.stack, // Include stack trace in the response
      },
      { status: 500 }
    );
  }
};
