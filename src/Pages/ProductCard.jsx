import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID from URL
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://api-bc2h.onrender.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProduct(data); // Assume the response has product details
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product.");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return (
      <div className="text-center mt-12">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid mx-auto"></div>
        <p className="text-xl font-bold mt-4">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 border border-gray-300 rounded-lg flex items-start">
      <img
        src={product.img}
        alt={`Product image of ${product.name}`}
        className="w-1/3 object-cover rounded-lg"
      />
      <div className="ml-4">
        <div className="text-lg font-semibold">{product.name}</div>
        <div className="text-gray-700">Price: ₹{product.price}</div>
        <div className="text-gray-700">Size: {product.size}</div>
        <div className="text-gray-700">
          Ingredients:{" "}
          {product.ingredients
            ? product.ingredients.join(", ")
            : "Not available"}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
