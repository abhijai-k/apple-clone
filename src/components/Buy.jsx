import React from "react";
import "../styles/Buy.css";
import iphoneImage from "../assets/buyimage.png";
import saveIcon from "../assets/saveicon.png";
import deliveryIcon from "../assets/truck.png";
import pickupIcon from "../assets/bag.png";

function Buy() {
  return (
    <div className="buy-section">
      <div className="left-section">
        <h4 className="black-heading">Your new iPhone 16 Pro.</h4>
        <h4 className="gray-heading">Just the way you want it.</h4>
        <div className="image-section">
          <img src={iphoneImage} alt="iPhone 16 Pro" className="iphone-image" />
        </div>
      </div>

      <div className="middle-section">
        <h5 className="model-name">iPhone 16 Pro 1TB Natural Titanium</h5>
        <p className="price-info bold">From ₹13742.00/mo. with instant cashback§§ and No Cost EMI§</p>
        <p className="or-text">or</p>
        <p className="price-info">MRP ₹169900.00 (Incl. of all taxes)</p>
        <div className="cashback-section">
          <p className="cashback-text">Explore instant cashback§§ and No Cost EMI§</p>
          <button className="plus-button">+</button>
        </div>
        <hr className="cashback-line" />
        <div className="moment-section">
          <h5 className="moment-heading">Need a moment?</h5>
          <p className="moment-text">
            Keep all your selections by saving this device to Your Saves, then come back anytime and pick up right where you left off.
          </p>
          <div className="save-section">
            <img src={saveIcon} alt="Save Icon" className="save-icon" />
            <span className="save-later">Save for later</span>
          </div>
        </div>
        <hr className="delivery-line" />
        <p className="delivery-text">Delivery details for your area will be shown in Checkout.</p>
      </div>

      <div className="right-section">
        <div className="delivery-info">
          <img src={deliveryIcon} alt="Delivery Icon" className="delivery-icon" />
          <p className="delivery-text">Order by 4:00 pm. Delivers to 695010 (Get Delivery Dates)</p>
        </div>

        <div className="pickup-info">
          <img src={pickupIcon} alt="Pickup Icon" className="pickup-icon" />
          <p className="pickup-text">Pickup: Check availability</p>
        </div>

        <div className="add-to-bag-section">
          <button className="add-to-bag-button">Add to Bag</button>
        </div>
      </div>
    </div>
  );
}

export default Buy;
