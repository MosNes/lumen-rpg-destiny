const mongoose = require('mongoose');

const { Schema } = mongoose;

const weaponSchema = new Schema({
    
    _id: {
        type: Schema.Types.ObjectId,
    },

    name: {
        type: String,
        required: false,
    },

    dice: {
        type: Number,
        required: true,
    },

    harm: {
        type: Number,
        required: true,
    },

    archetype: {
        type: Schema.Types.ObjectId,
        ref: 'WeaponArchetype',
    },

    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag',
        }
    ],


});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;