import React from "react";
export default function Product({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
        <p>
          <span className="font-medium">ID:</span> {product.id}
        </p>
        <p>
          <span className="font-medium">가격:</span> ${product.price}
        </p>
        <p>
          <span className="font-medium">평점:</span> {product.rating}
        </p>
        <p>
          <span className="font-medium">재고:</span> {product.stock}
        </p>
        <p>
          <span className="font-medium">카테고리:</span> {product.category}
        </p>
        <p>
          <span className="font-medium">브랜드:</span> {product.brand}
        </p>
      </div>
      <p className="mt-3 text-sm text-gray-700">{product.description}</p>
    </div>
  );
}
