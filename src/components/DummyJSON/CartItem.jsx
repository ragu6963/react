import React from "react";

export default function CartItem({ product }) {
  return (
    <div className="border border-gray-300 p-4 mb-2 bg-white">
      <div className="mb-1">상품명(title) : {product["title"]}</div>
      <div className="mb-1">가격(price) : {product["price"]}</div>
      <div className="mb-1">수량(quantity) : {product["quantity"]}</div>
      <div>총 가격(total) : {product["total"]}</div>
    </div>
  );
}
