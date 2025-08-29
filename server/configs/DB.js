import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kataricoder_db_user:jSH4i7Dgkvs6xYrx@cluster0.87u78ot.mongodb.net/instaDB")
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;