const mongoose = require("mongoose");

const ShoppingListSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    item: String,
    quantity: Number,
    total_price: Number,
    date_created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ShoppingList", ShoppingListSchema);