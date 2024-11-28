"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import YouTube from "react-youtube";
import Image from "next/image";
import { toast } from "sonner";

const QueueUpdater = ({ admin, user }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await fetch(`/api/get-queue`, {
          method: "POST",
          body: JSON.stringify({ admin }),
        });
        const data = await res.json();
        if (data.success) {
          setSongs(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching queue:", error);
      }
    };
    fetchQueue();
    const intervalId = setInterval(fetchQueue, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleVote = async (id) => {
    const res = await fetch(`/api/song-vote`, {
      method: "PATCH",
      body: JSON.stringify({ songId: id, admin, user }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="flex w-full max-w-4xl mx-auto justify-center gap-6 h-full py-4">
      {/* Queue Section */}
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            {songs?.slice(1).length > 0 ? (
              songs.slice(1).map((song, index) => (
                <React.Fragment key={song._id || index}>
                  <div className="flex items-center space-x-4 py-2">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={song.thumbnail || ""}
                        alt={song.title}
                      />
                      <AvatarFallback>
                        {song.title[0]?.toUpperCase() || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{song.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Added by: {song.addedBy}
                      </p>
                    </div>
                    <button
                      onClick={() => handleVote(song._id)}
                      className="flex items-center gap-1 hover:bg-accent px-2 py-1 rounded"
                    >
                      <ChevronUp className="h-4 w-4" />
                      <span>{song.votes}</span>
                    </button>
                  </div>
                  {index < songs.slice(1).length - 1 && (
                    <Separator className="my-2" />
                  )}
                </React.Fragment>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No songs in the queue.
              </p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Currently Playing Section */}
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Currently Playing</CardTitle>
        </CardHeader>
        <CardContent>
          {songs?.length > 0 ? (
            <div className="flex flex-col items-center space-y-4">
              {admin == user ? (
                <YouTube
                  videoId={new URL(songs[0]?.songUrl).searchParams.get("v")}
                  opts={{
                    height: "390",
                    width: "430",
                    playerVars: {
                      autoplay: 1, // Automatically play the video
                    },
                  }}
                  onEnd={() => {
                    console.log("Song has ended!");
                    // Trigger next song in queue or other actions here
                  }}
                  onError={(e) => console.error("YouTube Player Error:", e)}
                />
              ) : (
                <Image
                  src={songs[0].thumbnail}
                  alt="song"
                  width={430}
                  className="rounded-lg"
                  height={390}
                />
              )}
              <h3 className="text-lg font-medium">{songs[0]?.title}</h3>
              <p className="text-sm text-muted-foreground">
                Added by: {songs[0]?.addedBy}
              </p>
              <p className="text-sm">Votes: {songs[0]?.votes}</p>
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-4">
              No song is currently playing.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QueueUpdater;
