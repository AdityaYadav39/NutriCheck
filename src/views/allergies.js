import React, { useState } from "react";
import "./allergies.css";
import Navbar8 from "../components/navbar8";

const Allergies = () => {
    const [selectedAllergens, setSelectedAllergens] = useState([]);
    const [reactionSeverity, setReactionSeverity] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [consent, setConsent] = useState(false);

    const handleAllergenChange = (event) => {
        const value = event.target.value;
        setSelectedAllergens((prev) =>
            prev.includes(value)
                ? prev.filter((allergen) => allergen !== value)
                : [...prev, value]
        );
    };

    const handleDietaryChange = (event) => {
        const value = event.target.value;
        setDietaryRestrictions((prev) =>
            prev.includes(value)
                ? prev.filter((restriction) => restriction !== value)
                : [...prev, value]
        );
    };

    const handleFileUpload = (event) => {
        setUploadedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (!consent) {
            alert("Please provide consent to proceed.");
            return;
        }
    
        // Collect all form data
        const allergyData = {
            selectedAllergens,
            reactionSeverity,
            dietaryRestrictions,
            uploadedFile: uploadedFile ? uploadedFile.name : null, // Log only the file name
            consent,
        };
    
        // Log data to the console
        console.log("Submitted Allergy Data:", allergyData);
    
        // Optionally, show a success alert
        alert("Allergy data submitted successfully!");
    
        // Reset form (optional)
        setSelectedAllergens([]);
        setReactionSeverity("");
        setDietaryRestrictions([]);
        setUploadedFile(null);
        setConsent(false);
    };
    

    return (
        <div>
            <Navbar8 />
            <div className="allergies-page">
                <h1 className="header thq-heading-1"><span className="header1">NutriCheck</span> Allergy Form</h1>
                <p className="sub-header">Help us understand your allergies and dietary needs</p>

                <form className="allergy-form" onSubmit={handleSubmit}>
                    {/* Section 1: Known Allergens */}
                    <div className="form-section">
                        <label>Known Allergens:</label>
                        <div className="checkbox-group">
                            {["Peanuts", "Milk/Dairy", "Gluten", "Soy", "Other"].map((allergen) => (
                                <label key={allergen}>
                                    <input
                                        type="checkbox"
                                        value={allergen.toLowerCase()}
                                        onChange={handleAllergenChange}
                                    />
                                    {allergen}
                                </label>
                            ))}
                            {selectedAllergens.includes("other") && (
                                <input
                                    type="text"
                                    placeholder="Specify other allergens"
                                    className="input-other"
                                />
                            )}
                        </div>
                    </div>

                    {/* Section 2: Reaction Severity */}
                    <div className="form-section">
                        <label>Reaction Severity:</label>
                        <select
                            value={reactionSeverity}
                            onChange={(e) => setReactionSeverity(e.target.value)}
                        >
                            <option value="" disabled>Select severity</option>
                            <option value="mild">Mild</option>
                            <option value="moderate">Moderate</option>
                            <option value="severe">Severe</option>
                        </select>
                    </div>

                    {/* Section 3: Dietary Restrictions */}
                    <div className="form-section">
                        <label>Dietary Restrictions:</label>
                        <div className="checkbox-group">
                            {["Vegetarian", "Vegan", "Low-sodium", "Sugar-free"].map((diet) => (
                                <label key={diet}>
                                    <input
                                        type="checkbox"
                                        value={diet.toLowerCase()}
                                        onChange={handleDietaryChange}
                                    />
                                    {diet}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: File Upload */}
                    <div className="form-section">
                        <label>Upload Nutritional Label:</label>
                        <input type="file" accept="image/*, .pdf" onChange={handleFileUpload} />
                    </div>

                    {/* Section 5: Consent */}
                    <div className="form-section">
                        <div className="consent">
                            <input
                                type="checkbox"
                                checked={consent}
                                onChange={() => setConsent(!consent)}
                            />
                            <label>I consent to the analysis of my allergy data.</label>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Submit Allergy Data</button>
                </form>
            </div>
        </div>
    );
};

export default Allergies;
