"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useState } from "react";
import QueueLine from "@/components/custom/queueLine";
const Dashboard = () => {
  const { userid } = useParams();
  const { user } = useKindeBrowserClient();
  const [link, setLink] = useState("");
  const handleAdd = async () => {
    const regex =
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

    const match = link.match(regex);
    if (!match) {
      toast.error("Invalid URL");
      return;
    }
    const data = await fetch("/api/add-in-queue", {
      method: "POST",
      body: JSON.stringify({
        id: match[1],
        link,
        userid,
        addedBy: user.given_name + " " + user?.family_name,
      }),
    });
    const res = await data.json();
    if (res.success) {
      toast.success("Song added to queue");
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div>
      {user?.id == userid && (
        <div className="mt-10 flex justify-center gap-4">
          <Input
            className="w-2/3 p-4"
            disabled
            type="text"
            value={
              process.env.NEXT_PUBLIC_FRONTEND_URL + "/dashboard/" + userid
            }
          />
          {
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  process.env.NEXT_PUBLIC_FRONTEND_URL + "/dashboard/" + userid
                );
                toast.success("Copied to clipboard");
              }}
            >
              copy
            </Button>
          }
        </div>
      )}
      <div className="mt-10 flex justify-center gap-4">
        <Input
          className="w-2/3 p-4"
          placeholder="Enter a song URL of youtube"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
        />
        <Button onClick={handleAdd} className="px-5">
          Add
        </Button>
      </div>
      <div className="flex justify-center mt-10">
        <QueueLine admin={userid} user={user?.id} />
      </div>
    </div>
  );
};

export default Dashboard;
