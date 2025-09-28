// components/Counter/Counter.jsx

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">{count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => increment()}
          className="bg-blue-500  text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          +1
        </button>
        <button
          onClick={() => decrement()}
          className="bg-red-500  text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          -1
        </button>
        <button
          onClick={() => reset()}
          className="bg-gray-500  text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          0으로 초기화
        </button>
      </div>
    </div>
  );
}
