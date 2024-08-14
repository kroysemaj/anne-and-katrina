import React from "react";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="container text-center menu-container">
      <div className="call-to-action ">
        <p className="menu-title">Menu</p>
      </div>
      <div className="menu-details">
        <div className="menu-item">
          <p className="entree">Democracy Manifest</p>
          <p className="entree-details">A Succulent Chinese Meal</p>
          <p className="dietary-info">V</p>
        </div>
        <div className="menu-item">
          <p className="entree">Millions of Peaches</p>
          <p className="entree-details">
            Nature's candy in my hand, or a can or a pie
          </p>
          <p className="dietary-info">V VG</p>
        </div>
        <div className="menu-item">
          <p className="entree">King of Carrot Steaks</p>
          <p className="entree-details">
            Holy rattlesnakes that fell all around your feet
          </p>
          <p className="dietary-info">OM NOM</p>
        </div>
      </div>
      <div>
        <p className="footnote">
          please include any allergen information with your RSVP
        </p>
      </div>
    </div>
  );
};

export default Menu;
