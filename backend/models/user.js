const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);