const mongoose = require('mongoose');

const { Schema } = mongoose;

const weaponArchetypeSchema = new Schema({
    
    _id: {
        type: Schema.Types.ObjectId,
    },

    baseDice: {
        type: Number,
        required: true,
    },

    baseHarm: {
        type: Number,
        required: true,
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

const WeaponArchetype = mongoose.model('WeaponArchetype', weaponArchetypeSchema);

module.exports = WeaponArchetype;