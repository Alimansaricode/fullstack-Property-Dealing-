import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Have any questions about buying, selling, or renting a property?
            We'd love to hear from you. Fill out the form and we'll get back to
            you as soon as possible.
          </p>

          <div className="info">
            <p>
              <FaEnvelope /> alimansari.dev@gmail.com
            </p>

            <p>
              <FaPhoneAlt /> +91 70xxx 43210
            </p>

            <p>
              <FaMapMarkerAlt /> New Delhi, India
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/mwpypgqe"
          method="POST"
        >
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default About;