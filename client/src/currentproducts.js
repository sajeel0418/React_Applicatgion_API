import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrentProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/readAllProducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {error && <p className="alert alert-danger">{error}</p>}
      <h2 className="text-center">Current Products</h2>
      <ul className="list-group mt-4">
        {products.map((product) => (
          <li key={product._id} className="list-group-item list-group-item-success">
            <h3>{product.name}</h3>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentProducts;
