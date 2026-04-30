import mongoose from "mongoose";
import { ENV } from "../lib/env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected at ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting MongoDB", error);
    process.exit(1);
  }
};
