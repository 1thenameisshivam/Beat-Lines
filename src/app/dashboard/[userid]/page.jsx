"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useParams } from "next/navigation";

const Dashboard = () => {
  const { userid } = useParams();
  const { user } = useKindeBrowserClient();

  return (
    <div>
      {user?.id == userid && (
        <div className="mt-10 flex justify-center gap-4">
          <Input
            className="w-2/3 p-4"
            disabled
            type="text"
            value={"http://localhost:3000/dashboard/" + userid}
          />
          {
            <Button
              onClick={() => {
                navigator.clipboard.writeText(
                  "http://localhost:3000/dashboard/" + userid
                );
                toast.success("Copied to clipboard");
              }}
            >
              copy
            </Button>
          }
        </div>
      )}
    </div>
  );
};

export default Dashboard;
