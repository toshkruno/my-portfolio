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
      <h1>Hi,</h1>
        <h1>I'm a Fullstack Developer.</h1>
        <p>I want to make things that <span>make a difference.</span></p>
        <div>
          <Link to="https://www.dropbox.com/scl/fi/zkago2942ir5u3t7zj6wj/Anthony-k-Mukami.pdf?rlkey=u6lu5xigqp5yspdm4emic95iz&dl=0" className="btn">
            Dowload my resume
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
