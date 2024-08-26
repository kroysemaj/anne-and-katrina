import React from "react";
import "../styles/Home.css";
import JamHandy from "../assets/JamHandyFacade.jpg";

const Home = () => {
  return (
    <div className="container text-center home-container">
      <div className="call-to-action ">
        <p className="anne">Anne</p>
        <p className="and">&</p>
        <p className="katrina">Katrina</p>
      </div>
      <div className="event-details">
        <p className="what">TO CELEBRATE THE MARRIAGE OF</p>
        <h3 className="who">
          ANNE <span className="space-around">&</span> KATRINA
        </h3>
        <h3 className="when">
          <span>05</span> <span className="separator">&nbsp;</span>{" "}
          <span>OCT</span> <span className="separator">&nbsp;</span>{" "}
          <span>24</span>
        </h3>
        <p className="where">The Jam Handy</p>
        <p className="where">2900 East Grand Blvd.</p>
        <p className="where">Detroit, Mi 48202</p>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5895.12604289115!2d-83.06920808927333!3d42.37315113415577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d28fa1353199%3A0x60a0718dd69a54f0!2sJam%20Handy!5e0!3m2!1sen!2sus!4v1724290262037!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <img className="facade" src={JamHandy} alt="The Jam Handy Facade" />
      </div>
      <div>
        <p className="invites">formal invitation to follow</p>
      </div>
    </div>
  );
};

export default Home;
