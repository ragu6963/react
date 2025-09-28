import { useEffect, useState } from "react";

export default function EmptyDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // count 값이 변경될 때마다 실행
    console.log("컴포넌트 최초 렌더링");
  }, []);

  return (
    <div>
      <h1>빈 의존성 배열</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
