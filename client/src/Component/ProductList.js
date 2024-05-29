import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [updateProduct, setUpdateProduct] = useState({
    _id: "", name: "", description: "", price: "", category: ""
  });
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct({ ...updateProduct, [name]: value });
  };

  const updateHandler = (id, name, description, price, category) => {
    setUpdateProduct({ _id: id, name, description, price, category });
    setShowEditModal(true);
  };

  const submitUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, updateProduct);
      fetchProducts();
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      {showEditModal && (
        <div className="modal fade show d-flex align-items-center justify-content-center" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={updateProduct.name}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={updateProduct.description}
                    onChange={handleChange}
                    placeholder="Enter Product Description"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={updateProduct.price}
                    onChange={handleChange}
                    placeholder="Enter Product Price"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={updateProduct.category}
                    onChange={handleChange}
                    placeholder="Enter Product Category"
                  />
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                    style={{ width: '200px' }}
                    onClick={() => { submitUpdate(updateProduct._id); }}
                    type="button"
                  >
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        {error && <p className="alert alert-danger">{error}</p>}
        <h2 className="text-center">Product List</h2>
        <ul className="list-group mt-4">
          {products.map((product) => (
            <li key={product._id} className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
              <div>{product.name} - ${product.price}</div>
              <div>
                <span
                  className="me-2"
                  onClick={() => { updateHandler(product._id, product.name, product.description, product.price, product.category); }}
                  style={{ cursor: 'pointer' }}
                >✏️</span>
                <span
                  className="text-danger"
                  onClick={() => { deleteHandler(product._id); }}
                  style={{ cursor: 'pointer' }}
                >🗑️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
