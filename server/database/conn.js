import mongoose from "mongoose";

export default async function connect() {
    await mongoose.connect('mongodb+srv://paipup:123admin@cluster0.6e9skel.mongodb.net/test')
    console.log("Database Connected")
}