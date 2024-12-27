import React from "react";
import "../styles/AppleCare.css";
import logo from "../assets/applelogo.jpg";

function AppleCare() {
  return (
    <div className="applecare-section">
      <h2>
        <span className="black-text">AppleCare+</span>
        <span className="gray-text"> coverage. Protect your new iPhone.</span>
      </h2>
      <div className="model-options-o">
        <div className="model-box-o">
          <div className="model-left-o">
            <h4>
              <img src={logo} alt="Logo" className="small-logo" /> AppleCare+
            </h4>
          </div>
          <div className="model-right-a">
            <p>From ₹1742.00/mo.</p>
            <p>or MRP ₹20900.00 (Inc. of all taxes)</p>
            <hr className="horizontal-line" />
            <ul className="bullet-points">
              <li>Unlimited repairs for accidental damage protection</li>
              <li>Apple-certified repairs using genuine Apple parts</li>
              <li>Priority access to Apple experts</li>
            </ul>
          </div>
        </div>
        <div className="model-box-o">
          <div className="model-left-o">
            <h4>No AppleCare+ Coverage</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleCare;
