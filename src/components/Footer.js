import "./FooterStyles.css";

import React from "react";
import {FaHome, FaMailBulk, FaPhone, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (<div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <p>
            <FaHome size={15} style={{ color: "#fff", marginRight: "2rem" }} />Embakasi, Kenya.
          </p>
        </div>
        <div className="phone">
          <p>
            <FaPhone size={15} style={{ color: "#fff", marginRight: "2rem" }} />+254795607137
          </p>
        </div>
        <div className="email">
          <p>
            <FaMailBulk size={15} style={{color:"#fff", marginRight: "2rem"}} />jakestonie@gmail.com
          </p>
        </div>
      </div>

      <div className="right">
        <h4 className="right-heading">About me</h4>
        <p className="right-text">Born in '98 in Nairobi, Kenya. 
          Back in 2017, I decided to try my hand at Computer Science and tumbled head-first into the black-hole of Coding and Web-Dev. Fast-forward to today, and I’ve had the privilege of building software for a National campus, a member of the National Assembly, a leading printing & graphics design shop, and a huge IT corporation.<br/> <br/>

          My main focus these days is building products and leading projects for my clients. In my free time, I'm either watching online classes to keep growing and stay abreast of the latest developments in technology and industry trends, or just playing video games 😎. This continuous learning not only enhances my skill-set but also ensures that I can deliver innovative and cutting-edge solutions to meet the evolving needs of my clients.<br/><br/>

          When I’m not at the computer, I’m usually extreme bicycle-riding, hanging out with friends or family, swimming or running around chasing good food 😇.</p>
        <div className="social">
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
        <p>© 2023 Me, Myself & I Inc.    All rights are reserved.</p>
      </div>
  </div>)
};

export default Footer;
