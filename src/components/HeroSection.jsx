import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import iphone16ProImage1 from '../assets/c1.png';
import iphone16ProImage2 from '../assets/c2.png';
import iphone16ProImage3 from '../assets/c3.png';
import iphone16ProImage4 from '../assets/c4.png';
import iphone16ProImageB1 from '../assets/p1.png';
import iphone16ProImageB2 from '../assets/p2.png';
import iphone16ProImageB3 from '../assets/p3.png';
import iphone16ProImageB4 from '../assets/p4.png';
import iphone16ProImageC1 from '../assets/b1.png';
import iphone16ProImageC2 from '../assets/b2.png';
import iphone16ProImageC3 from '../assets/b3.png';
import iphone16ProImageC4 from '../assets/b4.png';
import iphone16ProImageP1 from '../assets/a1.png';
import iphone16ProImageP2 from '../assets/a2.png';
import iphone16ProImageP3 from '../assets/a3.png';
import iphone16ProImageP4 from '../assets/a4.png';

function HeroSection() {
  const [isSticky, setIsSticky] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('desertTitanium');

  const images = {
    desertTitanium: [iphone16ProImage1, iphone16ProImage2, iphone16ProImage3, iphone16ProImage4],
    naturalTitanium: [iphone16ProImageB1, iphone16ProImageB2, iphone16ProImageB3, iphone16ProImageB4],
    whiteTitanium: [iphone16ProImageC1, iphone16ProImageC2, iphone16ProImageC3, iphone16ProImageC4],
    blackTitanium: [iphone16ProImageP1, iphone16ProImageP2, iphone16ProImageP3, iphone16ProImageP4],
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollLeft = () => {
    setCurrentImage((prev) => (prev === 0 ? images[selectedColor].length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentImage((prev) => (prev === images[selectedColor].length - 1 ? 0 : prev + 1));
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentImage(0);
  };

  return (
    <section className="hero-section">
      {isSticky && (
        <div className="sticky-navbar">
          <h2>iPhone 16 Pro</h2>
          <div className="navbar-actions">
            <button className="action-button">Buy Now</button>
            <button className="action-button">Learn More</button>
          </div>
        </div>
      )}

      <div className="hero-header">
        <div className="new-label">New</div>
        <div className="main-heading">Buy iPhone 16 Pro</div>
        <div className="sub-heading">
          From ₹14992.00/mo. with instant cashback§§ and No Cost EMI§Footnote or MRP ₹184900.00 (Incl. of all taxes)
        </div>
      </div>

      <div className="hero-body">
        <div className="carousel-container">
          <button className="carousel-button left" onClick={scrollLeft}>
            &#8592;
          </button>
          <div className="product-image-carousel" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {selectedColor &&
              images[selectedColor]?.map((image, index) => (
                <img key={index} src={image} alt={`iPhone 16 Pro ${index + 1}`} className="carousel-image" />
              ))}
          </div>
          <button className="carousel-button right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>

        <div className="model-comparison">
          <div className="scrollable-section">
            <h3>
              <span className="black-text">Model</span>
              <span className="gray-text">. Which is best for you?</span>
            </h3>
            <div className="model-options">
              <div className="model-box">
                <div className="model-left">
                  <h4>iPhone 16 Pro</h4>
                  <p>15.9 cm (6.3″) display¹</p>
                </div>
                <div className="model-right">
                  <p>From ₹9575.00/mo. or ₹119900.00‡</p>
                </div>
              </div>
              <div className="model-box">
                <div className="model-left">
                  <h4>iPhone 16 Pro Max</h4>
                  <p>17.4 cm (6.9″) display¹</p>
                </div>
                <div className="model-right">
                  <p>From ₹11658.00/mo. or ₹144900.00‡</p>
                </div>
              </div>
            </div>

            <div className="help-section">
              <button className="add-button">+</button>
              <h4>Need help choosing a model?</h4>
              <p>Explore the differences in screen size and battery life.</p>
            </div>

            <div className="finish-section">
              <h4>
                <span className="black-text">Finish</span>
                <span className="gray-text">. Pick your favourite</span>
              </h4>
            </div>

            <div className="color-section">
              <div
                className={`color-item ${selectedColor === 'desertTitanium' ? 'active' : ''}`}
                onClick={() => handleColorClick('desertTitanium')}
              >
                <div className="color-circle" style={{ backgroundColor: '#d8b18a' }}></div>
                <span className="color-name">Desert Titanium</span>
              </div>
              <div
                className={`color-item ${selectedColor === 'naturalTitanium' ? 'active' : ''}`}
                onClick={() => handleColorClick('naturalTitanium')}
              >
                <div className="color-circle" style={{ backgroundColor: '#b5a59c' }}></div>
                <span className="color-name">Natural Titanium</span>
              </div>
              <div
                className={`color-item ${selectedColor === 'whiteTitanium' ? 'active' : ''}`}
                onClick={() => handleColorClick('whiteTitanium')}
              >
                <div className="color-circle" style={{ backgroundColor: '#f0f0f0' }}></div>
                <span className="color-name">White Titanium</span>
              </div>
              <div
                className={`color-item ${selectedColor === 'blackTitanium' ? 'active' : ''}`}
                onClick={() => handleColorClick('blackTitanium')}
              >
                <div className="color-circle" style={{ backgroundColor: '#333333' }}></div>
                <span className="color-name">Black Titanium</span>
              </div>
            </div>

            <div className="storage-section">
              <h4>
                <span className="black-text">Storage</span>
                <span className="gray-text">. Choose your capacity</span>
              </h4>
              <div className="model-options-o">
                <div className="model-box-o">
                  <div className="model-left-o">
                    <h4>256GB²</h4>
                  </div>
                  <div className="model-right-o">
                    <p>From ₹11658.00/mo. or MRP ₹144900.00‡ (Incl. of all taxes)</p>
                  </div>
                </div>
                <div className="model-box-o">
                  <div className="model-left-o">
                    <h4>512GB²</h4>
                  </div>
                  <div className="model-right-o">
                    <p>From ₹13325.00/mo. or MRP ₹164900.00 (Incl. of all taxes)</p>
                  </div>
                </div>
                <div className="model-box-o">
                  <div className="model-left-o">
                    <h4>1TB²</h4>
                  </div>
                  <div className="model-right-o">
                    <p>From ₹14992.00/mo. or MRP ₹184900.00‡ (Incl. of all taxes)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
