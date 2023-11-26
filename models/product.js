const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: [true, "Price must be Provided"],
    },
    featured: {
        type: Boolean,
        require: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`
        }
    }
});

module.exports = mongoose.model("Product", productSchema);