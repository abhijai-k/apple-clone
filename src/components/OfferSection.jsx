import React from "react";
import "../styles/OfferSection.css";
import bank1 from '../assets/amex.png';
import bank2 from '../assets/axis.png';
import bank3 from '../assets/icici.png';

function OfferSection() {
  return (
    <section className="offer-section">
      <div className="offer-box">
        <div className="offer-content">
          <p>Get ₹10,000 instant cashback on select iPhone models Available with <br /> select credit and debit cards. Terms and conditions apply.</p>
        </div>
        <div className="bank-logos">
          <img src={bank1} alt="Bank 1" className="bank-logo" />
          <img src={bank2} alt="Bank 2" className="bank-logo" />
          <img src={bank3} alt="Bank 3" className="bank-logo" />
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
