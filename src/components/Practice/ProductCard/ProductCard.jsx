export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-lg font-semibold text-green-600 mb-1">
        {product.price}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        재고:{" "}
        <span className={product.inStock ? "text-green-500" : "text-red-500"}>
          {product.inStock ? "재고 있음" : "품절"}
        </span>
      </p>
      <p className="text-sm text-gray-600 mb-3">평점: ⭐ {product.rating}</p>
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
