import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return <div>Dashboard</div>;
};

export default Dashboard;
