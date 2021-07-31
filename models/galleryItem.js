const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({  
    ProductName: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true,
    },
    ProductLink: {
        type: String,
        required: true
    },
    LinkShop: {
        type: String,
        required: true
    },
}, { timestamps: true })

const ShopItem = mongoose.model('item', schema)

module.exports = ShopItem