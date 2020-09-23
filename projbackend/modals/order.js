const mongoose = require("mongoose");

const {ObjectID} = mongoose.ObjectID;

const ProductCartSchema = new mongoose.Schema({
    product:{
        type: ObjectID,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
        type: number
    }, 
    address: String,
    updated: Date,
    user: {
        type: ObjectID,
        ref: "User"
    }
}, { timestamps: true}
);

const Order = mongoose.model("Order", OrderSchema);
const ProductCart = mongoose.model("ProductCart",ProductCartSchema);

module.exports = {Order, ProductCart};

