const mongoose = require('mongoose');

const { Schema } = mongoose;

const tagSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },

    typeName: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag',
        }
    ],


});