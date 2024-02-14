const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },
    originalURL:{
        type: String,
        require: true
    },
    visitHistory: {
            type: Number,
            required: true
        },
},
{
    timestamps: true
});

const URL = mongoose.model("url", urlSchema);
module.exports = URL