import "./FormStyles.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xs3dg7s', 'template_jgc62pk', form.current, 'vTArBCMnmatq_Su-Q')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="user_name"></input>
      <label>Email</label>
      <input type="email" name="user_email"></input>
      <label>Subject</label>
      <input type="text" name="subject" placeholder="What's this about?"></input>
      <label>Message</label>
      <textarea rows="6" placeholder="Kindly give me more details." name="message"/>
      <button className="btn">Send email</button>
    </form>
  </div>
  );
};

export default Form;
