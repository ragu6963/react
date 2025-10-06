import { useState, useEffect } from "react";
import TargetNumber from "./TargetNumber";
import Operator from "./Operator";
import findMinOperations from "../../../utils/dfs";

export default function Container() {
  const [number, setNumber] = useState(1);
  const [targetNumber, setTargetNumber] = useState(10);
  const [minCount, setMinCount] = useState(0);
  const [count, setCount] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 99) + 2); // 2~100 범위
    setGameStatus("playing");
  }, []);

  useEffect(() => {
    setMinCount(findMinOperations(targetNumber));
  }, [targetNumber]);

  // 게임 상태 체크
  useEffect(() => {
    if (number === targetNumber && count <= minCount) {
      alert("성공");
      setGameStatus("stop");
    }
    if (number !== targetNumber && count > minCount) {
      alert("시도 횟수 초과");
      setGameStatus("stop");
    }
  }, [number, targetNumber, count, minCount]);

  function handleOperatorClick(operator) {
    if (gameStatus === "stop") {
      return;
    }
    let newNumber = number;

    switch (operator) {
      case "+1":
        if (number + 1 > 100) {
          alert("100보다 커질 수 없습니다");
          return;
        } else {
          newNumber = number + 1;
        }
        break;
      case "-1":
        if (number - 1 < 1) {
          alert("1보다 작아질 수 없습니다");
          return;
        } else {
          newNumber = number - 1;
        }
        break;
      case "*2":
        if (number * 2 > 100) {
          alert("100보다 커질 수 없습니다");
          return;
        } else {
          newNumber = number * 2;
        }
        break;
    }
    setCount(count + 1);
    setNumber(newNumber);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white mt-8">
      <div className="text-center mb-6">
        <p className="text-xl text-gray-700 mb-2">현재 숫자</p>
        <span className="text-3xl font-bold">{number}</span>
      </div>

      <div className="space-y-4">
        <TargetNumber
          targetNumber={targetNumber}
          minCount={minCount}
          count={count}
        />
        <Operator onClick={handleOperatorClick} />
      </div>
    </div>
  );
}
