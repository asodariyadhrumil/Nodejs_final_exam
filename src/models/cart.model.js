const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            trim: true
        },
        total: {
            type : Number,
            trim: true
        },
        order:{
            type: mongoose.Types.ObjectId,
            ref:"order"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const cart = mongoose.model("cart" , cartSchema);
module.exports = cart;