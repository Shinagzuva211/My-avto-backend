const mongoose = require("mongoose")

const carSchema = new mongoose.Schema(

    {
        brand: {
            type: String,
            required: true,
            trim: true,
        },
        model: {
            type: String,
            required: true,
            trim: true,
        },

        year: {
            type: Number,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        fuel: {
            type: String,
            required: true,
        },

        transmission: {
            type: String,
            required: true,
        },

        mileage: {
            type: Number,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },

        engine: {
            type: String,
            required: true,
        },

        driveType: {
            type: String,
            required: true,
        },

        features: {
            type: [String],
            default: [],
        },

        description: {
            type: String,
        },

        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }

)

module.exports = mongoose.model("Car", carSchema)