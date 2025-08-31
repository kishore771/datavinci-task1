import React from "react";
import "./ColorsClub.css";

const ColorsClub = () => {
  return (
    <div className="product-info">
      {/* Rewards */}
      <div className="rewards">
        <img
          src="/images/img_colourclub_logo.png"
          alt="Colourclub"
          className="rewards-icon"
        />
        <span>
          Colourclub members earn up to{" "}
          <span className="highlight">56</span> reward points when buy this
          item. Sign up or log in
        </span>
      </div>

      {/* Delivery */}
      <div className="delivery">
        <div>
          <h4>DELIVERY</h4>
          <p>FREE DELIVERY ON ORDERS OVER $30</p>
        </div>
        <div>
          <h4>ESTIMATED DELIVERY DATE:</h4>
          <p>Jun 9 - Jun 13</p>
        </div>
      </div>

      <hr />

      {/* Afterpay */}
      <div className="afterpay">
        <h4>AFTERPAY</h4>
        <p>
          or 4 interest-free payments of <b>$13.97</b> with{" "}
          <img src="/images/img_button_afterpay.svg" alt="Afterpay" />
        </p>
      </div>

      <hr />

      {/* UMF Scale */}
      <div className="umf-scale">
        <h4>UMF™ SCALE</h4>
        <div className="umf-options">
          <span className="inactive1">UMF™ 10+</span>
          <span className="inactive2">UMF™ 15+</span>
          <span className="inactive3">UMF™ 20+</span>
          <span className="active">UMF™ 24+</span>
          <span className="inactive4">UMF™ 26+</span>
          <span className="inactive5">UMF™ 28+</span>
          <span className="inactive6">UMF™ 30+</span>
        </div>
      </div>

      {/* Taste Profile */}
<div className="taste-profile">
  <h4>TASTE PROFILE</h4>
  <div className="taste-bar">
    <div className="slider">
      <div className="dot"></div>
    </div>
    <div className="taste-labels">
      <span>Clean & Intense</span>
      <span>Bold & Intense</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default ColorsClub;
