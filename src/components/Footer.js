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
            <p>Embakasi, Nairobi.</p>
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
        <p>I'm Anthony, a versatile tech enthusiast with a profound passion for technology. As a developer, I excel at transforming ideas into elegant lines of code, crafting visually stunning applications that captivate users. My expertise extends beyond development, encompassing network infrastructure optimization and a deep commitment to fortifying digital security. I'm known for being both a collaborative team player and an effective leader, consistently driving exceptional results in the world of technology.</p>
        <div className="social">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
        <p>© 2023 Me,Myself&I Inc. All rights are reserved.</p>
        <p>App built by myself.</p>
      </div>
  </div>)
};

export default Footer;
