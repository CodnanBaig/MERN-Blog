const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        min: 4
    },
    description: {
        type: String,
        required: true,
        min: 12
    },
    photo: {
        type: String,
        required: true
    }
})