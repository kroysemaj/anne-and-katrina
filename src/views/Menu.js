import React from "react";
import "../styles/Menu.css";
import Separator from "../assets/Khonsu.png";

const Menu = () => {
  const dishes = [
    {
      name: "Aloo Tikki",
      description: "crispy potato and veggie cakes",
    },
    {
      name: "Sesame Gobi",
      description: "tasty sesame cauliflower bites",
    },
    {
      name: "Seekh kebabs",
      description: "a kebab, you know what this is",
    },
    {
      name: "Yello daal",
      description: "savory lentils in a mild sauce",
    },
    {
      name: "Channa pindi",
      description: "roasted ginger-garlic chickpeas",
    },
    {
      name: "Aloo gobi",
      description: "potato cauliflower curry",
    },
    {
      name: "Chick tikka masala",
      description: "creamy chicken curry",
    },
    {
      description: "Fruit platter",
    },
    {
      description: "Rice",
    },
    {
      description: "Salad",
    },
    {
      description: "Assorted papads, raitas, and desserts",
    },
  ];

  return (
    <div className="container text-center menu-container">
      <div className="call-to-action ">
        <p className="view-title menu-title">Menu</p>
      </div>
      <div className="menu-details">
        <div>
          <p className="menu-desc">We are providing an Indian feast!</p>
          <p className="menu-desc-sub"> Selections will include:</p>
        </div>
        <div className="separator">
          <img src={Separator} />
        </div>
        {dishes.map((dish, index) => (
          <p key={index} className="menu-item">
            {dish.name && <p className="menu-item-name">{dish.description}</p>}
            {dish.description && (
              <p className="menu-item-description">{dish.description}</p>
            )}
          </p>
        ))}
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
