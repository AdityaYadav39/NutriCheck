// models/Allergies.js
const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema({
    userId: { type: String, required: true }, // Associate allergies with a user
    allergies: [String], // List of allergy items
    dietaryRestrictions: [String], // List of dietary restrictions
});

const Allergy = mongoose.model('Allergy', allergySchema);
module.exports = Allergy;
