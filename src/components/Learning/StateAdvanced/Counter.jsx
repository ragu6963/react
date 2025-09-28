import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // 예상 : 0 + 1 = 1
    // 실제 : 0 + 1 = 1
    let NewCount = count + 1;
    setCount(NewCount);

    // 예상 : 1 + 1 = 2
    // 실제 : 0 + 1 = 1
    let NewCount2 = count + 1;
    setCount(NewCount2);

    // 예상 : 2 + 1 = 3
    // 실제 : 0 + 1 = 1
    let NewCount3 = count + 1;
    setCount(NewCount3);

    console.log(count); // 0
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>상태 변경의 비동기성</button>
    </div>
  );
}
