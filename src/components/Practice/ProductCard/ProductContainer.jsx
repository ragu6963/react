// components/ProductCard/ProductContainer.jsx
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  // 문자열, 숫자, 불리언, 배열을 포함한 상품 데이터
  const product1 = {
    name: "무선 이어폰",
    price: 89000,
    description: "고음질 무선 이어폰",
    inStock: true,
    rating: 4.5,
    tags: ["전자제품", "오디오", "무선"],
    image: "https://picsum.photos/id/96/300/200",
  };

  const product2 = {
    name: "스마트워치",
    price: 299000,
    description: "건강 관리 스마트워치",
    inStock: false,
    rating: 4.8,
    tags: ["전자제품", "웨어러블", "건강"],
    image: "https://picsum.photos/id/97/300/200",
  };

  const product3 = {
    name: "노트북 가방",
    price: 45000,
    description: "15인치 노트북용 가방",
    inStock: true,
    rating: 4.2,
    tags: ["가방", "노트북", "액세서리"],
    image: "https://picsum.photos/id/98/300/200",
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">상품 목록</h1>
      <div className="flex flex-wrap gap-4">
        <ProductCard product={product1} />
        <ProductCard product={product2} />
        <ProductCard product={product3} />
      </div>
    </div>
  );
}
