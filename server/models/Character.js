const mongoose = require('mongoose');

const { Schema } = mongoose;

const characterSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },

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

    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },

    currentAffinity: {
        type: Schema.Types.ObjectId,
        ref: 'Affinity'
    },

    powers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Power'
        }
    ],

    weapons: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Weapon'
        }
    ],

    body: {
        type: Number,
        required: true,
    },

    speed: {
        type: Number,
        required: true,
    },

    mind: {
        type: Number,
        required: true,
    },

    currentHealth: {
        type: Number,
    },

    currentMomentum: {
        type: Number,
    },

    currentEnergy: {
        type: Number,
    },

    anscestry: {
        type: String,
        required: true,
    },

    ghostName: {
        type: String,
        required: true,
    },

    notes: {
        type: String,
    }


});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;