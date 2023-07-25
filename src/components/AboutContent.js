import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import Pythn from "../assets/python.jpg"

const AboutContent = () => {
  return (
  <div className="about">
    <div className="top-container">
      <div className="left">
        <div className="heading-div">
          <div className="vertical-bar"></div>
          <div><h1>Mission-driven full stack developer</h1></div>
        </div>
        <p>I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns — from construction worker, to employee of a local garbage collection service  provider, to amateur professional boxer, to hawker and eventually a small business owner and entrepreneur, to a Tech guru and Programming god — I've never stopped engaging my passion to push my limits, to help others and solve problems.</p>
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
    </div>
    <div className="experience-heading">
      <div className="vertical-bar"></div>
      <div>
        <h1>Experience</h1>
      </div>
    </div>
    <div className="experience-container">
      <div className="experience-text mb-3">
        <div className="row-item">
          <h3>CISCO Networking Academy</h3>
          <p>May 2023 - Jun 2023</p>
          <ul>
            <li>Attended & completed Python self-paced online Training</li>
            <li>Python frameworks</li>
            <li>API development classes</li>
            <li>Python advanced+ concepts</li>
          </ul>
        </div>
        <div className="row-item">
          <h3>Freelancer</h3>
          <p>March 2021 - Present</p>
          <ul>
            <li>Python developer</li>
            <li>Full stack web developer</li>
            <li>SEO optimization</li>
            <li>Web scraper</li>
            <li>API developer</li>
            <li>Network security</li>
            <li>Linux professional</li>
            <li>Ethical Hacker</li>
          </ul>
        </div>
        <div className="row-item">
          <h3>Entrepreneur</h3>
          <p>2019 - Present</p>
          <ul>
            <li>Founder & Developer of designs4delight</li>
            <li>Business Skills</li>
          </ul>
        </div>
        <div className="row-item">
          <h3>Jewelry Designer & Hawker</h3>
          <p>2016 - 2018</p>
          <ul>
            <li>Product designer</li>
            <li>Sole proprietor</li>
            <li>Customer service</li>
            <li>Data gathering & eval</li>
            <li>Business strategist</li>
          </ul>
        </div>
        <div className="row-item">
          <h3>Intern web developer at Own Cloud LTD</h3>
          <p>August 2022 - Nov 2022</p>
          <ul>
            <li>Python developer</li>
            <li>Front-end web developer</li>
            <li>Responsive web designs</li>
            <li>Back-end web developer</li>
            <li>API developer</li>
            <li>Odoo lead developer</li>
          </ul>
        </div>
        <div className="row-item">
          <h3>Amateur boxer</h3>
          <p>2017 - 2020</p>
          <ul>
            <li>Tactical thinking skills</li>
            <li>Self defense</li>
            <li>Health & Wellness</li>
            <li>Combat skills</li>
          </ul>
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
