import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(" https://api-bc2h.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products</h1>

        {loading ? (
          <div className="text-center mt-12">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto"></div>
            <p className="text-xl font-bold mt-4">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 my-8 gap-24">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                size={product.size}
                id={product.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
