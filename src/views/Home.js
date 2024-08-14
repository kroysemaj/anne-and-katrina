import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container text-center home-container">
      <div className="call-to-action ">
        <p className="save-the">Save the</p>
        <p className="view-title">Date</p>
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
        <p className="where">Detroit, Michigan, USA</p>
      </div>
      <div>
        <p className="invites">formal invitation to follow</p>
      </div>
    </div>
  );
};

export default Home;
