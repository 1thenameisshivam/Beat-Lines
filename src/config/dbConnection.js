import mongoose from "mongoose";

const connection = {};

const dbConnection = async () => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    mongoose.connection.on("error", (error) => {
      console.log("Error connecting to database", error);
    });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

export default dbConnection;
