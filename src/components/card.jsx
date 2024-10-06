import React, { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import "../styles/card.css";
import { ImageCarousel } from "./imageCarousel";

const Card = ({ data, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const Item = ({ title, subtitle, index, setSelectedId, ...props }) => (
    <motion.div
      className="item"
      key={title}
      layoutId={index + 1}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <div className="tile-title">{title}</div>
      <img className="tile-image" src={props.img[0]} alt="first-img" />
      <div className="expand-btn-container">
        <button className="expand-btn" onClick={() => setSelectedId(index + 1)}>
          &#x25BC;
        </button>
      </div>
    </motion.div>
  );
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <LayoutGroup>
        <ul className="gallery">
          {data.map((item, index) => (
            <Item
              key={item.index}
              {...item}
              index={index}
              setSelectedId={setSelectedId}
            />
          ))}
        </ul>
        <AnimatePresence>
          {selectedId && (
            <motion.div className="modalContainer" key="modal">
              <motion.div className="modal" layoutId={selectedId}>
                <h2>{data[selectedId - 1].title}</h2>
                <div>{data[selectedId - 1].amenities.description}</div>
                <div className="carousel-container">
                  <ImageCarousel
                    images={data[selectedId - 1].img}
                  ></ImageCarousel>
                </div>
                {/* <div className="package-container">
                  {data[selectedId - 1].packages.map((productPackage) => {
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
                                <button onClick={() => decreaseQuantity}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => increaseQuantity}>+</button>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                addToCart(
                                  productPackage,
                                  quantity,
                                  data[selectedId - 1].title
                                )
                              }
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div> */}
                <div className="expand-btn-container">
                  <motion.button
                    className="expand-btn"
                    onClick={() => setSelectedId(null)}
                  >
                    &#x25B2;
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
};

export default Card;
