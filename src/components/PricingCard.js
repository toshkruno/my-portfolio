import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Eminent Plan -</h3>
          <span className="bar"></span>
          <p className="btc">$ 150</p>
          <p>- Delivered in 3 Business Days -</p>
          <p>- Comprehensive 3-Page Package -</p>
          <p>- Exclusive Featured Add-ons -</p>
          <p>- Responsive Design -</p>
          <p>- Elevate with 3D Animations for an extra $100 -</p>
        </div>

        <div className="card">
          <h3>- Prestige Plan -</h3>
          <span className="bar"></span>
          <p className="btc">$ 250</p>
          <p>- 1 Week (5 Business Days) -</p>
          <p>- Deluxe 5-Page Package -</p>
          <p>- Premium Featured Add-ons -</p>
          <p>- Responsive Design -</p>
          <p>- Elevate with 3D Animations for an extra $300 -</p>
        </div>

        <div className="card">
          <h3>- Elite Plan -</h3>
          <span className="bar"></span>
          <p className="btc">$ 450</p>
          <p>- 1 Week (8 Business Days) -</p>
          <p>- Comprehensive 5+ Page Package -</p>
          <p>- Exclusive Premium Add-ons -</p>
          <p>- Responsive Design -</p>
          <p>- Elevate with 3D Animations for an extra $400 -</p>
        </div>
      </div>
      <div className="cta">
        <p>If any of these offers pick your interest, let's have a coffee!</p>
        {/* Use the Link component to navigate to "/contact" */}
        <Link to="/contact" className="btn cta-button">
          NUDGE ME
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
