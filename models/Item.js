const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean
    },
    featureId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature'
    }],
    imageId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image'
        }
    ],
    activityId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Activity'
        }
    ]
})

module.exports = mongoose.model('Item', itemSchema)