const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    //limits tag to specific weapon types or power
    limitTo: [
        {
            type: String,
        }
    ],
})