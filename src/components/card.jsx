import React, { useState } from "react";
import "../styles/card.css"; // Import the CSS file

const Card = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const expandCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`product-card-container ${isExpanded ? "removeHover" : ""}`}
    >
      <div className={`${isExpanded ? "overlay" : ""}`}>
        <div
          className={`expanded-card-container ${
            isExpanded ? "expandedCard" : ""
          }`}
        >
          <div className="card">
            <div className="image-container">
              {item.img.map((image, key) => {
                return (
                  <div key={key}>
                    <img src={image} alt={image} className="card-image" />
                  </div>
                );
              })}
            </div>
            <div className="card-title">{item.title}</div>
            <div className="card-description">{item.description}</div>
          </div>
          <button onClick={expandCard}>epxand</button>
          <div className="controls-container">
            <span>Rs. {item.price}</span>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
          </div>
          <button onClick={() => addToCart(item, quantity)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
