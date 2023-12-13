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
        <div className="header-content">
          <h1>Welcome.</h1>
          <p>My name is Toni. I'm a full-stack developer based in Utawala, Nairobi, Kenya.
            I am proficient in a myriad of technologies, I specialize not only in crafting engaging websites but also in developing robust software solutions.
            I have done many projects from Ecommerce booking platforms, online Art Galleries to Political websites. My expertise extends to the realm of Odoo and Python development.<br /> <br /> I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
        </div>
        <div className="btn-container">
          <div className="btn-div">
            <Link
              to="https://www.dropbox.com/scl/fi/fb577d72f8z0tztl9uccv/Anthony-k-Mukami.docx?rlkey=8ywmnrkr5mh2qcovyhavvkyre&dl=0"
              className="btn rounded"
            >
              My resume
            </Link>
          </div>
          <div className="btn-div">
            <Link to="/contact" className="btn btn-light rounded">
              Contact Me
            </Link>
          </div>
          {!playIntro && (
            <div className="btn-div">
              <button onClick={handlePlayIntro} className="btn rounded">
                Virtual assistant
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
