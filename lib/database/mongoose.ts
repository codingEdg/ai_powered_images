import mongoose, { Mongoose } from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mangoose;

if (!cached) {
  cached = (global as any).mangoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  // check if cached connection is available
  if (cached.conn) return cached.conn;

  // if url is not exist throw an error
  if (!MONGODB_URL) throw new Error("MONGODB_URL is not defined");

  // check if cached promise is exist and if not then connect to database with details
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  // save resolved promise in cached connection
  cached.conn = await cached.promise;

  // return the cached connection
  return cached.conn;
};
