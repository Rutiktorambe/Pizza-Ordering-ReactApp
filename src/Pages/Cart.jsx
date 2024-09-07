import React, { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { CartContext } from "../CartContext";
import emptycart from "../images/empty-cart.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [totalsum, settotalsum] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!cart.items) {
      setLoading(false);
      return;
    }

    const fetchCartProducts = async () => {
      const cartProductIds = Object.keys(cart.items);
      const fetchedProducts = await Promise.all(
        cartProductIds.map(async (id) => {
          const response = await fetch(
            ` https://api-bc2h.onrender.com/products/${id}`
          );
          return response.json();
        })
      );
      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchCartProducts();
  }, [cart, products]);

  useEffect(() => {
    const sum = products.reduce((acc, product) => {
      const qty = cart.items[product.id] || 0;
      return acc + product.price * qty;
    }, 0);
    settotalsum(sum); // Set the total sum here
  }, [products, cart]);

  const handleIncrement = (productid) => {
    const oldQT = cart.items[productid];
    const _cart = { ...cart };
    _cart.items[productid] = oldQT + 1;
    _cart.totalItems += 1;

    setCart(_cart);
  };

  const handleDecrement = (productid) => {
    const oldQT = cart.items[productid];
    if (oldQT > 0) {
      const _cart = { ...cart };
      _cart.items[productid] = oldQT - 1;
      _cart.totalItems -= 1;
      setCart(_cart);
    }
  };

  const handleDelete = (productid) => {
    const oldQT = cart.items[productid];
    const _cart = { ...cart };
    _cart.totalItems -= oldQT;
    delete _cart.items[productid];
    setCart(_cart);
  };

  const getsum = (price, qty) => {
    return price * qty;
  };

  const navigate = useNavigate();

  const ordernow = () => {
    setCart({});
    setProducts([]);
    navigate("/order-confirmation");
  };

  return (
    <>
      <Navigation />

      <div className="container mx-auto lg:w-1/2 w-full pb-24">
        <h1 className="my-12 font-bold">Cart items</h1>

        {loading ? (
          <div className="text-center mt-12">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-xl font-bold mt-4">Loading...</p>
          </div>
        ) : cart.totalItems ? (
          <div>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img className="h-16" src={product.img} alt="product" />
                      <span className="font-bold ml-4 w-48">
                        {product.name}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                      >
                        -
                      </button>
                      <b>{cart.items[product.id]}</b>
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                      >
                        +
                      </button>
                    </div>
                    <span>
                      ₹{getsum(product.price, cart.items[product.id])}
                    </span>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="my-6" />
            <div className="text-right">
              <b>Grand Total: ₹{totalsum}</b>
            </div>

            <div className="text-right mt-6">
              <button
                onClick={ordernow}
                className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
              >
                Order Now
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Your cart is empty.</p>
            <img
              className="mx-auto w-1/2 mt-12"
              src={emptycart}
              alt="empty cart"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
