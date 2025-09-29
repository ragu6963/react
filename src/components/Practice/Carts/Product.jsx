// components/Carts/Product.jsx

export default function Product({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <p>{product.total}</p>
      <img src={product.thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
