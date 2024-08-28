import React from "react";
import "../styles/RSVP.css";

const RSVP = () => {
  return (
    <div className="container text-center menu-container">
      <div className="call-to-action faq-cta">
        <p className="view-title rsvp-title">RSVP</p>
      </div>
      <div className="rsvp">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScUNBZWshfHq2_SndCxXoJfi2E0Ayf4gOIvuRBjJwjo8Z7EGg/viewform?embedded=true"
          width="400"
          height="1039"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RSVP;
