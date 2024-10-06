export const AddToCart = ({
  addToCart,
  data,
  selectedId,
  increaseQuantity,
  decreaseQuantity,
  quantity,
}) => {
  const handleButtonClick = (event) => {
    // Stop the click event from propagating to parent elements
    event.stopPropagation();
  };
  return (
    <div className="package-container">
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
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                </div>
                <button
                  onClick={(event) => {
                    handleButtonClick(event);
                    addToCart(
                      productPackage,
                      quantity,
                      data[selectedId - 1].title
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
