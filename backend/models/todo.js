const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    status: {
        type: String,
        enum: ["Pending", "Completed", "In Progress"],
        default: "Pending"
    },
    start_date: Date,
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todo", TodoSchema);