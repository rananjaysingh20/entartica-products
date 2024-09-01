import React, { useState } from "react";
import "../styles/card.css"; // Import the CSS file

const Card = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="product-card-container">
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
  );
};

export default Card;
