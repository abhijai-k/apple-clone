import React from "react";
import "../styles/Box.css";
import boxImage from "../assets/box.png";
import icon1 from "../assets/tv.png";
import icon2 from "../assets/music.png";
import icon3 from "../assets/archade.png";

function Box() {
  return (
    <div className="box-section">
      <h3 className="box-heading">What’s in the Box</h3>
      <div className="image-section">
        <img src={boxImage} alt="What's in the Box" className="box-image" />
      </div>

      <div className="environmental-goals">
        <h5 className="environmental-heading">Our environmental goals.</h5>
        <p className="environmental-text">
          As part of our efforts to reach carbon neutrality by 2030, iPhone 16 Pro and iPhone 16 Pro Max do not include a power adapter or EarPods. Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.
          <span className="blue-text">carbon neutrality by 2030</span>
        </p>
        <p className="environmental-text">
          We encourage you to use any compatible USB‑C power adapter. If you need a new Apple power adapter or headphones, they are available for purchase.
        </p>
      </div>

      <h2 className="more-heading">Your new iPhone comes with so much more.</h2>

      <div className="icons-section">
        <div className="icon-container">
          <img src={icon1} alt="Icon 1" className="icon" />
          <h5 className="icon-heading">Apple TV+</h5>
          <p className="icon-text">
            3 free months of original films and series.°°
          </p>
        </div>
        <div className="icon-container">
          <img src={icon2} alt="Icon 2" className="icon" />
          <h5 className="icon-heading">Apple Music</h5>
          <p className="icon-text">
            3 free months of all your favorite songs — all ad-free.°°
          </p>
        </div>
        <div className="icon-container">
          <img src={icon3} alt="Icon 3" className="icon" />
          <h5 className="icon-heading">Apple Arcade</h5>
          <p className="icon-text">
            3 free months of incredibly fun, uninterrupted gameplay.°°
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
