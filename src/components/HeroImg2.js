// HeroImg2.js
import React, { useEffect, useState } from "react";
import "./HeroImg2Styles.css";

const HeroImg2 = (props) => {
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
    <div className="hero-img">
      <div
        className="heading"
        style={{ transform: `translateY(${scrollOffset * 0.5}px)` }} // Adjust the multiplier to control the parallax effect
      >
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
