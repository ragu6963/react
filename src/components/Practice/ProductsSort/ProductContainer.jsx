import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }
    fetchProducts();
  }, []);

  function sortProducts(sortBy, sortOrder) {
    const newProducts = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    setProducts(newProducts);
  }
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => sortProducts("id", "asc")}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          ID ↑
        </button>
        <button
          onClick={() => sortProducts("id", "desc")}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          ID ↓
        </button>
        <button
          onClick={() => sortProducts("price", "asc")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          가격 ↑
        </button>
        <button
          onClick={() => sortProducts("price", "desc")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
        >
          가격 ↓
        </button>
        <button
          onClick={() => sortProducts("rating", "asc")}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
        >
          평점 ↑
        </button>
        <button
          onClick={() => sortProducts("rating", "desc")}
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm"
        >
          평점 ↓
        </button>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
