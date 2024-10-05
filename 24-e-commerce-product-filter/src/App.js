import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch products from a sample API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories from the products list
  const getCategories = () => {
    const allCategories = products.map((product) => product.category);
    return ["All", ...new Set(allCategories)]; // Add 'All' option for no filter
  };

  const filterProducts = () => {
    let updatedProducts = products;

    if (category !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }
    if (minPrice) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= minPrice
      );
    }
    if (maxPrice) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">E-Commerce Product Filter</h1>

      <div className="row mb-4">
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {getCategories().map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" onClick={filterProducts}>
            Filter
          </button>
        </div>
      </div>

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">
                    <small className="text-muted">{product.category}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
