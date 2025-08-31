import React, { useState } from "react";
import "./ProductDetails.css";
import ColorsClub from "../ColorsClub/ColorsClub";

const ProductDetails = () => {
   const [showPopup, setShowPopup] = useState(false);
  return (
     <div className="product-details">
      <p className="products-title">
        Manuka Honey <br />UMF &trade; <span className="num">24+</span> <br />MGO{" "}
        <span className="num">1122+</span>
      </p>

      {/* UMF Info Button */}
      <div className="umf-info">
        <img
          src="/images/img_svg_gray_700.svg"
          alt="UMF Info"
          className="umf-info-icon"
        />
        <p
          className="umf-title"
          onClick={() => setShowPopup(true)} // <-- show popup on click
        >
          WHAT IS UMF AND MGO?
        </p>
      </div>

      {/* Popup (only visible when showPopup = true) */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* UMF Section */}
            <div className="info-box">
              <p>
                <strong>UMF</strong> is the strength and purity rating of Manuka
                honey.
              </p>
              <div className="scale">
                <span className="orange">10+</span>
                <span className="red">15+</span>
                <span className="pink">20+</span>
                <span className="purple">24+</span>
                <span className="blue">26+</span>
                <span className="green">28+</span>
                <span className="navy">30+</span>
              </div>
              <p className="description">
                The higher the number, the greater the potency and rarity of
                Manuka honey.
              </p>
            </div>

            {/* MGO Section */}
            <div className="info-box">
              <p>
                <strong>MGO</strong> is the key natural compound that gives
                Manuka honey its special antibacterial strength.
              </p>
              <div className="scale">
                <span className="orange">263+</span>
                <span className="red">514+</span>
                <span className="pink">829+</span>
                <span className="purple">1122+</span>
                <span className="blue">1282+</span>
                <span className="green">1450+</span>
                <span className="navy">1620+</span>
              </div>
              <p className="description">
                The higher the number, the higher the antibacterial properties
                in the honey.
              </p>
            </div>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Rest of your component */}
      <div className="umf-description">
        <div>
          <p className="umf-product-title"> The Optimizer </p>
        </div>
        <div className="rating-section">
          <div className="stars">
            {/* 5 stars */}
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <span className="reviews">825 REVIEWS</span>
        </div>
      </div>

        <div className="product-description">
        <p>For those times in life when quality comes first. This pure UMF™ 24+ Manuka <br/>
            Honey is powerfully active, sourced from wild and rugged locations around <br/>
            Aotearoa New Zealand and great for almost all uses. It has a full, delicious <br/>
            flavour and your body will love you for it.</p>
          </div>

      <div className="certifications-section">
        <img src="/images/img_certifications.png" alt="cert1" className="cert-image" />
        <img src="/images/img_certifications_70x70.png" alt="cert2" className="cert-image" />
        <img src="/images/img_certifications_1.png" alt="cert3" className="cert-image" />
        <img src="/images/img_certifications_2.png" alt="cert4" className="cert-image" />
        <img src="/images/img_certifications_3.png" alt="cert5" className="cert-image" />
        <img src="/images/img_certifications_4.png" alt="cert6" className="cert-image" />
      </div>

      <div className="size-options">
        <p className="size-title">SIZE (SELECT ONE)</p>
        <p className="size-description">Variant: 125g | 4.4oz</p>
        <div className="size-buttons">
          <img src="/images/img_label_label_paints_130x130.png" alt="Size 1" />
          <img src="/images/img_label_label_paints_130x130.png" alt="Size 1" />
          <img src="/images/img_label_label_paints_1.png" alt="Size 2" />
          <img src="/images/img_label_label_paints_2.png" alt="Size 3" />
          <img src="/images/img_label_label_paints_3.png" alt="Size 4" />
          <img src="/images/img_label_label_paints_4.png" alt="Size 5" />
          <img src="/images/img_label_label_paints_5.png" alt="Size 6" />
        </div>
      </div>


      <div className="payment-methods">
        <p className="payment-title">PAYMENT OPTIONS (SELECT ONE)</p>
        <div className="payment-buttons-container">
        <button className="btn1"><div className="btn-text"><p>One-time <br/> Payment</p>
        <p>$55.88 <br/>USD</p></div></button>
        <button className="btn2"><div className="btn-text"><p>Subscribe & Save <br/> 20%</p>
        <p>$44.70 <br/>USD</p></div></button>
        <div className="reload-icon">
        <img src="/images/img_svg_blue_gray_900.svg" alt="Reload Icon" />
        <p>What is subscription</p>
      </div>
        </div>
        <div className="adding-to-cart">
          <p>SELECT QUANTITY</p>
          <button className="quantity-btn"> <spam className="sign1">-</spam>  1 <spam className="sign2">+</spam></button>
          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>

      <div className="bundle-section">
      <div className="bundle-header">
        <img src="images/img_button_previous.svg" alt="Beauty Bundle" className="slide-image" />
      <h2>Beauty Bundle</h2>
      <img src="images/img_button_next_slide.svg" alt="Beauty Bundle" className="slide-image" />
      </div>
      <div className="bundle-options">
        <div className="bundle-selector">
        <img src="images/img_image_94x94.png" alt="Beauty Bundle" className="beauty-bundle-image" />
        <select className="bundle-select">
          <option className="select-option">250g</option>
          <option className="select-option">500g</option>
        </select>
        </div> <h1 className="add">+</h1>
        <div className="bundle-selector">
        <img src="images/img_label_label_paints_2.png" alt="Beauty Bundle" className="beauty-bundle-image"/>
        <select className="bundle-select">
          <option className="select-option">250g</option>
          <option className="select-option">500g</option>
        </select>
        </div> <h1 className="add">+</h1>
        <div className="bundle-selector">
        <img src="images/img_image_152.png" alt="Beauty Bundle" className="beauty-bundle-image"/>
        </div>
        <div className="bundle-description">
        <div className="bundle-price">
          <p className="price-text">$478.75 USD</p>
          <p className="price-amount">$430.88 USD</p>
          <p className="savings-text">Save 10%</p>
        </div>
        <div className="bundle-footer">
        <button className="add-to-cart-button">ADD BUNDLE TO CART</button>
      </div>
        </div>
      </div>
    </div>
      <ColorsClub />
    </div>
  );
};

export default ProductDetails;
