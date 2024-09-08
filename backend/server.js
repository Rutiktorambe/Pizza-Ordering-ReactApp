require("dotenv").config();
const express = require("express");
const app = express();

// Products data
const products = [
  {
    id: 1,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/hawaiian.png",
    name: "Hawaiian",
    price: 299,
    size: "Small",
    ingredients: ["Ham", "Pineapple", "Cheese", "Tomato Sauce"],
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/pepperoni.png",
    name: "Pepperoni",
    price: 399,
    size: "Medium",
    ingredients: ["Pepperoni", "Cheese", "Tomato Sauce"],
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/margherita.png",
    name: "Margherita",
    price: 499,
    size: "Small",
    ingredients: ["Tomato", "Mozzarella Cheese", "Basil", "Tomato Sauce"],
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/vegetarian.png",
    name: "Vegetarian",
    price: 599,
    size: "Medium",
    ingredients: [
      "Bell Peppers",
      "Olives",
      "Onions",
      "Tomatoes",
      "Cheese",
      "Tomato Sauce",
    ],
  },
  {
    id: 5,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/seafood.png",
    name: "Seafood",
    price: 199,
    size: "Small",
    ingredients: ["Shrimp", "Mussels", "Squid", "Cheese", "Tomato Sauce"],
  },
  {
    id: 6,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/cheese.png",
    name: "Cheese",
    price: 299,
    size: "Medium",
    ingredients: [
      "Cheddar Cheese",
      "Mozzarella Cheese",
      "Parmesan",
      "Tomato Sauce",
    ],
  },
  {
    id: 7,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/mushroom.png",
    name: "Mushroom",
    price: 399,
    size: "Small",
    ingredients: ["Mushrooms", "Cheese", "Tomato Sauce"],
  },
  {
    id: 8,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/sweet.png",
    name: "Sweet",
    price: 499,
    size: "Medium",
    ingredients: ["Honey", "Cheese", "Caramelized Onions"],
  },
  {
    id: 9,
    img: "https://raw.githubusercontent.com/Rutiktorambe/API/Main/Images/chicken.png",
    name: "Chicken",
    price: 599,
    size: "Medium",
    ingredients: ["Chicken", "Cheese", "BBQ Sauce", "Red Onions"],
  },
];

// Endpoint to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Endpoint to get product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
