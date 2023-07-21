// HeroImg.js
import React, { useEffect, useState } from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";

const HeroImg = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = () => {
    setScrollOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div
        className="intro-img"
        style={{
          backgroundImage: `url(${IntroImg})`,
          backgroundPositionY: `${scrollOffset * 0.5}px`, // Adjust the multiplier to control the parallax effect
        }}
      />
      <div className="mask" />
      <div className="content">
        <p>Hi, I am a badass freelancer</p>
        <h1>Fullstack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
