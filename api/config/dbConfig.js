import mongoose from "mongoose";
import "dotenv/config";
const MONGO_BD_CONNECTION_URL = process.env.MONGO_BD_CONNECTION_URL;

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(MONGO_BD_CONNECTION_URL);

    if (connect) {
      console.log("Database connected at: " + MONGO_BD_CONNECTION_URL);
    }
  } catch (error) {
    console.log("Error", error);
  }
};
