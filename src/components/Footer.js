import "./FooterStyles.css";

import React from "react";
import {FaHome, FaMailBulk, FaPhone, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (<div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
          <div className="">
            <p>Sheli Sheli Street, Mihang'o</p>
            <p>Embakasi.</p>
          </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />+254(0)7 956 071 37
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />jakestonie@gmail.com
          </h4>
        </div>
      </div>

      <div className="right">
        <h4 className="">About myself</h4>
        <p>This is me, Anthony. I am the embodiment of ambition and adaptability. Am driven by an unwavering passion to make an impact. My diverse background and relentless pursuit of knowledge has molded me into an agile problem-solver with an eye for innovation. From conquering hurdles to savoring triumphs, I have honed my skills as a team player and leader, fostering collaboration and elevating outcomes.</p>
        <div className="social">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
        <p>© 2023 Myself, All rights are reserved.</p>
        <p>App built by Yagami_Light</p>
      </div>
  </div>)
};

export default Footer;
