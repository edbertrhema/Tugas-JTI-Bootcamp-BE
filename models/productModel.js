const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Plese enter a produk name"]
        },
        quantity: {
            type:Number,
            required: true,
            default: 0
        },
        price:{
            type:Number,
            required: true,

        },
        image:{
            type: String,
            requires: false,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product',productSchema);

module.exports = Product;