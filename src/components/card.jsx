import React, { useState } from "react";
import "../styles/card.css"; // Import the CSS file

const Card = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

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
    setShowAllImages(!showAllImages);
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
          <div className={`card ${isExpanded ? "incSmallCardSize" : ""}`}>
            <div className="img-desc-container">
              <div
                className={`image-container ${
                  isExpanded ? "expanded-image-container" : ""
                }`}
              >
                {item.img.map((image, index) => {
                  if (!showAllImages && index === 0) {
                    return (
                      <img
                        src={image}
                        alt={image}
                        className="card-image"
                        key={index}
                      />
                    );
                  } else if (showAllImages) {
                    return (
                      <img
                        src={image}
                        alt={image}
                        className="card-image"
                        key={index}
                      />
                    );
                  }
                })}
              </div>
              {isExpanded && (
                <div className="card-description">
                  {item.amenities.description}
                </div>
              )}
            </div>
            <div className="card-title">{item.title}</div>
          </div>
          {isExpanded && (
            <div className="package-container">
              {item.packages.map((productPackage) => {
                return (
                  <div className="package">
                    <div>{productPackage.packageName}</div>
                    <div className="package-desc">
                      <div>{productPackage.description}</div>
                      <div className="package-add-to-cart">
                        <div className="controls-container">
                          <span>
                            Rs.{" "}
                            <strike>
                              {productPackage.price.original ||
                                productPackage.price.original_price}
                            </strike>{" "}
                            {productPackage.price.discounted ||
                              productPackage.price.discounted_price}
                          </span>
                          <div className="quantity-controls">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                          </div>
                        </div>
                        <button
                          onClick={() => addToCart(productPackage, quantity, item.title)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="expand-btn-container">
            {!isExpanded ? (
              <button className="expand-btn" onClick={expandCard}>
                &#x25BC;
              </button>
            ) : (
              <button className="expand-btn" onClick={expandCard}>
                &#x25B2;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
