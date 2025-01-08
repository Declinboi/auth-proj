import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("Error while connecting to MongoDB:", err.message);
    process.exit(1); // 1 is failure while 0 is success
  }
};
