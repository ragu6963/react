import { useState } from "react";
export default function Calculator() {
  const [result, setResult] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function add() {
    console.log("x + y");
    let result = Number(x) + Number(y);
    // 상태 변경 로직
    setResult(result);
  }

  function subtract() {
    console.log("x - y");
    let result = Number(x) - Number(y);
    // 상태 변경 로직
    setResult(result);
  }

  function multiply() {
    console.log("x * y");
    let result = Number(x) * Number(y);
    // 상태 변경 로직
    setResult(result);
  }

  function divide() {
    console.log("x / y");
    let result = Number(x) / Number(y);
    // 상태 변경 로직
    setResult(result);
  }

  function handleChange(event) {
    const name = event["target"]["name"];
    const value = event["target"]["value"];
    if (name === "x") {
      setX(value);
    } else if (name === "y") {
      setY(value);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          value={x}
          onChange={handleChange}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          value={y}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={add}
        >
          더하기 +
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={subtract}
        >
          빼기 -
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={multiply}
        >
          곱하기 *
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
          onClick={divide}
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
