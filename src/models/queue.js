import mongoose from "mongoose";

const queueSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    songUrl: {
      type: String,
      required: true,
    },
    votes: {
      type: Number,
      default: 0,
    },
    addedBy: {
      type: String,
      required: true,
    },
    status: {
      type: String, // Status of the song in the queue: 'queued', 'playing', or 'played'
      enum: ["queued", "playing", "played"],
      default: "queued",
    },
  },
  { timestamps: true }
);

const Queue = mongoose.models.Queue || mongoose.model("Queue", queueSchema);

export default Queue;
