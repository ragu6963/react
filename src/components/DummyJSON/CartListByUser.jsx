import React from "react";
import CartItem from "./CartItem";

export default function CartListByUser({ cart }) {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-blue-50 p-4 mb-4 border border-blue-200">
        <div className="mb-2">사용자 식별자(userId) : {cart["userId"]}</div>
        <div className="mb-2">총합(total) : {cart["total"]}</div>
        <div>총 상품 수량(totalQuantity) : {cart["totalQuantity"]}</div>
      </div>
      <div>
        {cart?.products?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
