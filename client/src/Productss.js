import React from 'react';
import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';

function Products() {
  return (
    <div className="products-page">
      <div className="products">
        <style>
          {`
            .products-page {
              height: 100vh; /* Full viewport height */
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #f4f4f9; /* Light background color */
            }
            
            .products {
              width: 80%;
              background-color: #ffffff; /* White background for the main container */
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              padding: 20px;
            }
            
            .product-form, .product-list {
              background-color: #e9ecef;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              padding: 20px;
            }
          `}
        </style>
        <div className="row">
          <div className="col-md-6 product-form">
            <ProductForm />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 product-list">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
