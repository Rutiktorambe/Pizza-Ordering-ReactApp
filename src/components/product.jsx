import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const Product = ({ id, price, img, name, size }) => {
  const product = { id, price, img, name, size };
  const { cart, setCart } = useContext(CartContext);

  const [buttonText, setButtonText] = useState("ADD");
  const [buttonColor, setButtonColor] = useState("bg-yellow-400");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const addToCart = (e, product) => {
    e.preventDefault();

    let _cart = { ...cart };

    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);

    setButtonText("ADDED");
    setButtonColor("bg-green-500");
    setBtnDisabled(true);

    setTimeout(() => {
      setButtonText("ADD");
      setButtonColor("bg-yellow-400");
      setBtnDisabled(false);
    }, 300);
  };

  return (
    <Link to={`/products/${id}`}>
      <div className="product">
        <img src={img} alt="product" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{name}</h2>
          <span className="bg-gray-400 py-1 rounded-full text-sm px-4">
            {size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>₹{price}</span>
          <button
            disabled={btnDisabled}
            className={`${buttonColor} border-2 rounded-xl px-2`}
            onClick={(e) => addToCart(e, product)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
