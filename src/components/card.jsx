import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ImageCarousel } from "./imageCarousel";
import "../styles/card.css";
import { AddToCart } from "./addToCart";

const Item = ({
  title,
  index,
  selectedId,
  setSelectedId,
  image,
  ...props
}) => (
  <motion.div
    className="item"
    key={index}
    layoutId={index + 1}
    whileHover={{ scale: 1.1 }}
    {...props}
  >
    <motion.div className="tile-title">{title}</motion.div>
    <motion.img src={image} alt="first-image" className="tile-image"/>
    <motion.div className="expand-btn-container">
      <motion.button className="expand-btn" onClick={() => setSelectedId(index + 1)}>
        &#x25BC;
      </motion.button>
    </motion.div>
  </motion.div>
);

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

  const [selectedId, setSelectedId] = useState(null);

  const items = useMemo(() => data, [data]);

  return (
    <>
      <LayoutGroup>
        <ul className="gallery">
          {items.map((item, index) => (
            <Item
              key={item.index}
              {...item}
              image={item.img[0]}
              index={index}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          ))}
        </ul>
        <AnimatePresence mode="sync">
          {selectedId && (
            <motion.div className="modalContainer" key="modal">
              <motion.div className="modal" layoutId={selectedId}>
                <h2>{items[selectedId - 1].title}</h2>
                <div>{items[selectedId - 1].amenities.description}</div>
                <div className="carousel-container">
                  <ImageCarousel images={items[selectedId - 1].img} />
                </div>
                <div>
                  <AddToCart
                    quantity={quantity}
                    data={data}
                    addToCart={addToCart}
                    selectedId={selectedId}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                </div>
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
