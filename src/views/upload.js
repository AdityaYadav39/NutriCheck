import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./upload.css"; // Add styles specific to the Upload page
import Navbar8 from "../components/navbar8";

const Upload = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [extractedText, setExtractedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleImageUpload = (event) => {
        setSelectedImage(event.target.files[0]);
        setExtractedText(""); // Clear previous text
        setError(""); // Clear previous errors
    };

    const handleExtractText = () => {
        if (!selectedImage) {
            alert("Please upload an image first.");
            return;
        }
    
        setLoading(true);
        setError(""); // Reset error state
    
        Tesseract.recognize(selectedImage, "eng", {
            logger: (info) => console.log(info), // Logs OCR progress
        })
            .then(({ data: { text } }) => {
                setExtractedText(text); // Update state with extracted text
                console.log("Extracted Text:", text); // Log extracted text to the console
                setLoading(false);
            })
            .catch((err) => {
                console.error("OCR Error:", err); // Log any errors to the console
                setError("Failed to process the image. Please try again.");
                setLoading(false);
            });
    };
    

    return (
        <div className="upload">
            <Navbar8 />
            <div className="upload-container">
                <div className="upload-container1">
                    <h1 className="thq-heading-1"><span className="main-header">NutriCheck</span> - Analyze Labels</h1>
                    <h2 className="sub-header">
                        Upload nutritional labels to extract ingredients and analyze their impact.
                    </h2>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    <br /><br />
                    <button onClick={handleExtractText} disabled={loading} className="upload-button thq-button-animated ">
                        {loading ? "Processing..." : "Extract Text"}
                    </button>
                    <br /><br />
                    {error && <p className="error-message">{error}</p>}
                </div>

                {/* Example usage of action1 and action2 */}
                <div className="upload-buttons1">
                    <button
                        className="navbar8-action11 thq-button-animated thq-button-filled"
                        onClick={props.onAction1Click}
                    >
                        <span className="thq-body-small">
                            {props.action1 ?? "Get Started"}
                        </span>
                    </button>
                    <button
                        className="navbar8-action21 thq-button-outline thq-button-animated"
                        onClick={props.onAction2Click}
                    >
                        <span className="thq-body-small">
                            {props.action2 ?? "Submit"}
                        </span>
                    </button>
                </div>
                <div className="side-by-side">
                    {/* Image Section */}
                    <div className="image-container">
                        {selectedImage && (
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                alt="Uploaded"
                                className="uploaded-image"
                            />
                        )}
                    </div>

                    {/* Extracted Data Section */}
                    <div className="data-container">
                        {loading && <div className="loading-spinner">Processing...</div>}
                        {extractedText && (
                            <div className="text-output">
                                {/* <h2>Extracted Text:</h2> */}
                                <textarea
                                    value={extractedText}
                                    readOnly
                                />
                                <br />
                                <button className="upload-button"
                                    onClick={() =>
                                        navigator.clipboard.writeText(extractedText).then(() => alert("Text copied!"))
                                    }
                                >
                                    Copy Text
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Upload.defaultProps = {
    logoSrc: "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original",
    logoAlt: "NutriCheck Logo",
    action1: "Get Started",
    action2: "Submit",
    onAction1Click: () => alert("Default action1 handler called!"),
    onAction2Click: () => alert("Default action2 handler called!"),
};


export default Upload;
