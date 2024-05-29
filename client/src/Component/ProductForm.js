import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Toggle between Add and Edit mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        const response = await axios.put(`http://localhost:5000/api/update/${product._id}`, product);
        console.log("Product updated:", response.data);
      } else {
        const response = await axios.post("http://localhost:5000/api/addproduct", product);
        console.log("Product created:", response.data);
      }
      setProduct({ name: "", description: "", price: "", category: "" });
      setIsEditMode(false);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to create/update product. Please try again later.");
    }
  };

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">{isEditMode ? "Edit Product" : "Add Product"}</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter Product Description"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter Product Price"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter Product Category"
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" style={{ width: '200px' }} type="submit">
            {isEditMode ? "Save Changes" : "Submit"}
          </button>
        </div>
      </form>
      <style jsx>{`
        .product-form {
          background-color: #e9ecef;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 20px;
        }
        .product-form h2 {
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        .product-form .form-control {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .product-form .btn-primary {
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        .product-form .btn-primary:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default ProductForm;
