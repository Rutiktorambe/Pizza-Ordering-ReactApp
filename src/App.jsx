import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import Cart from "./Pages/Cart";
import ProductCard from "./Pages/ProductCard";
import OrderConfirmation from "./Pages/OrderConfirmation";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext"; // Correct import

const App = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductCard />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
