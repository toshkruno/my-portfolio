import React, { useState } from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import "./HeroImgStyles.css";

const HeroImg = () => {
  const [playIntro, setPlayIntro] = useState(false);

  const handlePlayIntro = () => {
    setPlayIntro(true);
    playIntroAudio();
  };

  const playIntroAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Hi there! This is Tony's website, I am his virtual assistant. My name is Jarvis, the sentient and all-knowing artificial intelligence marvel that stands as the guardian and narrator of this technological sorcery. Tony is a Designer and Developer. He works with companies & organizations that are driving the future with their services or technology, helping them have more brand expression through websites. You can hire him by clicking on the button 'Contact' to get in touch with him.");
      utterance.rate = 0.7;
      utterance.pitch = 0.001;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <div className="hero">
      <div
        className="intro-img"
        style={{
          backgroundImage: `url(${IntroImg})`,
        }}
      />
      <div className="mask" />
      <div className="content">
        <h1>Hi,</h1>
        <h1>Am a Fullstack Developer.</h1>
        <p>I make things that <span>make a difference.</span></p>
        <div>
          <Link
            to="https://www.dropbox.com/scl/fi/zkago2942ir5u3t7zj6wj/Anthony-k-Mukami.pdf?rlkey=u6lu5xigqp5yspdm4emic95iz&dl=0"
            className="btn"
          >
            Peek at my resume
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
          {!playIntro && (
            <button onClick={handlePlayIntro} className="btn">
              Virtual assistant
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
