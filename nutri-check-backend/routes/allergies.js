// routes/allergies.js
const express = require("express");
const router = express.Router();
const Allergy = require("../models/Allergies");

// Route to store allergies and dietary restrictions data
router.post("/store", async (req, res) => {
  const { userId, allergies, dietaryRestrictions } = req.body;

  try {
    let allergyData = await Allergy.findOne({ userId });

    if (allergyData) {
      // Update existing data
      allergyData.allergies = allergies;
      allergyData.dietaryRestrictions = dietaryRestrictions;
    } else {
      // Create new entry if not found
      allergyData = new Allergy({ userId, allergies, dietaryRestrictions });
    }

    await allergyData.save();
    res.status(200).json({ message: "Allergies and dietary restrictions saved successfully" });
  } catch (err) {
    console.error("Error saving allergies data: ", err);
    res.status(500).json({ error: "Failed to store allergies and dietary restrictions data" });
  }
});

// Route to fetch allergies and dietary restrictions data for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const allergyData = await Allergy.findOne({ userId });

    if (!allergyData) {
      return res.status(404).json({ error: "No allergies or dietary restrictions data found for user" });
    }

    res.status(200).json(allergyData);
  } catch (err) {
    console.error("Error fetching allergies data: ", err);
    res.status(500).json({ error: "Failed to fetch allergies and dietary restrictions data" });
  }
});

module.exports = router;
