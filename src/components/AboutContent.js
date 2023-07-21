import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import Pythn from "../assets/python.jpg"

const AboutContent = () => {
  return (
  <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>I'm a bada*s fullstack developer, versatile tech enthusiast with expertise in software, websites, networking, security & more.</p>
      <Link to="/contact">
        <button className="btn">Contact Me</button>
      </Link>
    </div>

    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src={React1} className="img" alt="React img"/>
        </div>

        <div className="img-stack bottom">
          <img src={Pythn} className="img" alt="React img"/>
        </div>
      </div>
    </div>
    <div className="my-story">
      <p className="space-out">root@kali:~# nc -v -n -z -w 1 192.168.**.* 1-50</p>
      <p>I'm excited to introduce myself as a versatile tech enthusiast with a diverse range of skills and a deep passion for all things related to technology. With expertise as a software developer, website developer, networking guru, and information security enthusiast, I am a well-rounded professional ready to take on any technological challenge that comes my way.</p>
      <p>As a software developer, I thrive on transforming ideas into reality through code. My love for problem-solving and creativity drive me to create innovative and efficient applications that can positively impact the lives of users. From developing cutting-edge mobile apps to architecting robust backend systems, I relish the opportunity to bring functionality and user-friendliness together.</p>
      <p>In the realm of website development, I find joy in designing visually stunning and user-centric websites. My keen eye for aesthetics and attention to detail enable me to craft captivating digital experiences that leave a lasting impression. By combining technical expertise with artistic flair, I create websites that not only look great but also perform flawlessly.</p>
      <p>Networking is another realm where my skills shine. Building and optimizing complex network infrastructures is not just a job for me; it's a passion. From establishing secure local area networks (LANs) to designing intricate wide area networks (WANs), I revel in connecting devices and systems to foster seamless data flow and efficient communication.</p>
      <p>Simultaneously, my commitment to information security is unwavering. Understanding the importance of safeguarding data and systems from cyber threats, I have immersed myself in the world of cybersecurity. Implementing advanced security measures and staying up-to-date with the latest security protocols, I strive to fortify digital assets and protect against potential vulnerabilities.</p>
      <p>With this diverse skill set, I am an enthusiastic collaborator, eager to engage in new projects and forge strong relationships with like-minded professionals. Networking, both in terms of IT infrastructure and building meaningful connections, has been instrumental in broadening my horizons and staying ahead of technological trends</p>
      <p>In conclusion, my journey as a software developer, website developer, networking expert, and information security enthusiast has shaped me into an adaptable and driven individual with a deep-rooted love for technology. I believe in the transformative power of technology to shape a better future, and I am determined to leverage my skills to contribute positively to this ever-evolving industry.</p>
      <p>Thank you for taking the time to get to know me better. I am excited to explore new opportunities that allow me to blend my diverse expertise and make a meaningful impact in the world of technology and beyond. Let's connect and collaborate on innovative projects that push the boundaries of what technology can achieve!</p>
      <p className="space-out">(UNKNOWN) [192.168.**.*] 3 (ftp) : Connection timed out</p>
    </div>
  </div>
  );
};

export default AboutContent;
