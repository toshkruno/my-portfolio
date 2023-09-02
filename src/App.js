import React, { useEffect } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  const playIntroAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("Hi there! This is Tony's website, I am his virtual assistant. My name is Jarvis, the sentient and all-knowing A-I marvel that stands as the guardian and narrator of this technological sorcery. Tony is a Designer and Developer. He works with companies & organizations that are driving the future with their services or technology, helping them have more brand expression through websites. You can hire him by clicking on the button 'Contact' to get in touch with him.");
      utterance.rate = 0.7;
      utterance.pitch = 0.001;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Speech synthesis not supported in this browser.');
    }
  };

  // Trigger the intro audio message using window.onload
  useEffect(() => {
    window.onload = () => {
      playIntroAudio();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
