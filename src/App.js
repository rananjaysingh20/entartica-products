import "./App.css";
import Card from "./components/card";
import ShoppingCart from "./components/shoppingCart";
import data from "./data.json";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showMobileCart, setShowMobileCart] = useState(false);

  const addToCart = (product, quantity, title) => {
    let existingProductIndex = cart.findIndex((prod) => prod === product);
    if (existingProductIndex !== -1) {
      let updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      product.quantity = quantity;
      product.mainTitle = title;
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productIndex) => {
    setCart(cart.filter((_, idx) => idx !== productIndex));
  };

  return (
    <div className={`App ${showMobileCart ? "showCartOverLay" : ""}`}>
      <div className="main-container">
        <div className="card-container">
          <Card data={data} addToCart={addToCart} />
        </div>
        <div
          className={`shopping-cart-container ${
            showMobileCart ? "showMobileCart" : ""
          }`}
        >
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
      <div
        className="mobileCartFixed"
        onClick={() => setShowMobileCart(!showMobileCart)}
      >
        Shopping Cart
      </div>
    </div>
  );
};

export default App;
