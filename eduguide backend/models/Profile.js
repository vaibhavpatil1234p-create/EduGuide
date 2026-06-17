const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    college: {
        type: String
    },

    branch: {
        type: String
    },

    phone: {
        type: String
    },

    city: {
        type: String
    },

    year: {
        type: String
    },

    dreamCollege: {
        type: String
    }

}, {

    timestamps: true

});

module.exports = mongoose.model("Profile", profileSchema);