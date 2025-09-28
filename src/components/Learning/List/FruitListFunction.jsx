// 렌더링할 리스트
const fruits = ["사과", "바나나", "오렌지"];

export default function FruitListFunction() {
  // 리스트 렌더링 반환 함수
  function fruitList() {
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
  }

  return <ul>{fruitList()}</ul>;
}
