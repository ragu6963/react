import { useState } from "react"; // useState Hook 모듈 불러오기

export default function Counter() {
  // [현재 상태 값, 상태 업데이트 함수] = useState(초기값)
  const [count, setCount] = useState(0);

  // 상태 업데이트 함수를 감싸는 함수
  const plusCount = () => {
    // 상태 업데이트 함수 호출
    setCount(count + 1);
  };

  // 상태 업데이트 함수를 감싸는 함수
  const minusCount = () => {
    // 상태 업데이트 함수 호출
    setCount(count - 1);
  };

  return (
    <div>
      <p>현재 count 상태 값: {count}</p>
      <button onClick={plusCount}>증가</button>
      <button onClick={minusCount}>감소</button>
    </div>
  );
}
