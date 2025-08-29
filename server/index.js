import express from "express";
import morgan from "morgan";
import cors from "cors"; 
import connectDB from "./configs/DB.js";
import User from "./models/userSchema.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

connectDB();

app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: "Thanku for registering" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
