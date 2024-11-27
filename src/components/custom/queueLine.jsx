"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const QueueUpdater = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const res = await fetch(`/api/get-queue`, { method: "GET" });
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

    // Fetch queue initially and poll every 5 seconds
    fetchQueue();
    const intervalId = setInterval(fetchQueue, 5000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex w-full max-w-4xl mx-auto justify-center gap-6 h-full py-4">
      {/* Queue Section */}
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {songs?.slice(1).length > 0 ? (
              songs.slice(1).map((song, index) => (
                <React.Fragment key={song.id || index}>
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
                    <Button variant="ghost" className="flex items-center gap-1">
                      <ChevronUp className="h-4 w-4" />
                      <span>{song.votes}</span>
                    </Button>
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
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src={songs[0]?.thumbnail || ""}
                  alt={songs[0]?.title}
                />
                <AvatarFallback>
                  {songs[0]?.title[0]?.toUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>
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
