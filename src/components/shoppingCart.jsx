import "../styles/shoppingCart.css"; // Import the CSS file

const ShoppingCart = ({ cart, removeFromCart }) => {
  const originalTotal = cart.reduce((sum, product) => sum + (product.price.original || product.price.original_price * product.quantity), 0);
  const total = cart.reduce((sum, product) => sum + (product.price.discounted || product.price.discounted_price * product.quantity), 0);
  const discount = originalTotal - total;

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart">
          <div className="cart-items">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <span>{product.mainTitle}</span>
                <span>{product.packageName}</span>
                <span>{product.quantity}</span>
                <span>
                  Rs.{" "}
                  <strike>
                    {product.price.original || product.price.original_price}
                  </strike>{" "}
                  {product.price.discounted || product.price.discounted_price}
                </span>
                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(index)}
                >
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="ic-remove" fillRule="nonzero" fill="#4A4A4A">
                        <path
                          d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8.99703014,11 C8.45303631,11 8,11.4477153 8,12 C8,12.5561352 8.4463856,13 8.99703014,13 L15.0029699,13 C15.5469637,13 16,12.5522847 16,12 C16,11.4438648 15.5536144,11 15.0029699,11 L8.99703014,11 Z"
                          id="Combined-Shape"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="pricing-container">
              <div>SubTotal:</div>
              <div>Rs. {originalTotal}</div>
            </div>
            <div className="pricing-container">
              <div>Discount:</div>
              <div>Rs. {discount}</div>
            </div>
            <div className="pricing-container">
              <div>Total:</div>
              <div>Rs. {total}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
