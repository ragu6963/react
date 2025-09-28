// 렌더링할 리스트
const fruits = ["사과", "바나나", "오렌지"];

export default function FruitList() {
  return (
    <ul>
      {/* map 함수를 활용해서 리스트 반복 */}
      {fruits.map((fruit, index) => (
        // 각 값을 li 태그 요소로 변환 후 반환
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
