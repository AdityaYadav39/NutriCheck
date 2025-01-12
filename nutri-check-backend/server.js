// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database/Database");  // Importing the connection function
const allergyRoutes = require("./routes/allergies");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the connection

// Test Route
app.get("/", (req, res) => {
  res.send("NutriCheck Backend is running!");
});

// Use allergies route
app.use("/allergies", allergyRoutes);

// POST Route for analysis
app.post("/analyze", async (req, res) => {
  const { ocrData, userId } = req.body;

  // Initialize warnings and recommendations
  const warnings = [];
  const recommendations = [];

  try {
    // Fetch allergies and dietary restrictions from MongoDB using userId
    const allergyResponse = await axios.get(`http://localhost:5000/allergies/${userId}`);

    if (!allergyResponse.data) {
      return res.status(404).json({ error: "No allergies or dietary restrictions data found for user" });
    }

    const { allergies, dietaryRestrictions } = allergyResponse.data;

    // Check for allergens in OCR data
    allergies.forEach((allergy) => {
      if (ocrData.toLowerCase().includes(allergy.toLowerCase())) {
        warnings.push(`Contains allergen: ${allergy}`);
      }
    });

    // Check dietary restrictions
    dietaryRestrictions.forEach((restriction) => {
      if (restriction === "vegetarian" && ocrData.toLowerCase().includes("gelatin")) {
        warnings.push("Contains gelatin (non-vegetarian).");
        recommendations.push("Consider vegetarian alternatives.");
      }
      if (restriction === "vegan" && ocrData.toLowerCase().includes("milk")) {
        warnings.push("Contains milk (non-vegan).");
        recommendations.push("Consider vegan alternatives.");
      }
    });

    // Return results
    res.json({
      status: warnings.length > 0 ? "Not Safe" : "Safe",
      warnings,
      recommendations,
    });
  } catch (err) {
    console.error("Error during analysis: ", err);
    res.status(500).json({ error: "Error during analysis" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
