const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    //username of character owner
    owner: {
        type: String,
        required: true,
        trim: true
    },

});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;