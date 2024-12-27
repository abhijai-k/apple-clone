import React, { useState } from "react";
import "../styles/OptionSelector.css";

function OptionSelector() {
  const [showMenu, setShowMenu] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
    setPinCodeError("");
  };

  const handleApplyClick = () => {
    if (pinCode.trim() === "") {
      setPinCodeError("PIN code is required.");
    } else {
      console.log("PIN Code Applied:", pinCode);
    }
  };

  return (
    <div className="option-selector">
      <h4>
        <span className="black-text">Apple Trade In.</span>
        <span className="gray-text">
          Get ₹4000.00-₹67500.00 credit towards your new iPhone.*
        </span>
      </h4>
      <div className="model-options-o">
        <div className="model-box-o" onClick={toggleMenu}>
          <div className="model-left-o">
            <h4>Select a smartphone</h4>
          </div>
          <div className="model-right-o">
            <p>Answer a few questions to get your estimate.</p>
          </div>
        </div>
        <div className="model-box-o">
          <div className="model-left-o">
            <h4>No trade-in</h4>
          </div>
        </div>
      </div>
      <div className={`menu-container ${showMenu ? "menu-open" : "menu-closed"}`}>
        <div className="menu">
          <div className="menu-section">
            <label>Enter your PIN code:</label>
            <div className="input-container">
              <input
                type="text"
                value={pinCode}
                onChange={handlePinCodeChange}
                className={`pin-input ${pinCodeError ? "input-error" : ""}`}
                placeholder="PINCODE"
              />
              <button
                className="apply-button"
                onClick={handleApplyClick}
                disabled={!pinCode.trim()}
              >
                Apply
              </button>
            </div>
            {pinCodeError && <p className="error-message">{pinCodeError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionSelector;
