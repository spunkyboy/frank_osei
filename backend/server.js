const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = new Contact({
            name,
            email,
            message
        });

        await newMessage.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.get("/messages", async (req, res) => {
    try {
        const messagesView = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: messagesView.length,
            data: messagesView
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch messages",
            error: error.message
        });
    }
});

const PORT = 5003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});