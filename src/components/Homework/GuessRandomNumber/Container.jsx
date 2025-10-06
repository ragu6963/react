import React, { useState, useEffect } from "react";
import RandomNumber from "./RandomNumber";
import Form from "./Form";

export default function Container() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // 컴포넌트 마운트 시 랜덤 숫자 생성
  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  }, []);

  const handleGuess = (guess) => {
    const guessNumber = Number(guess);
    setAttempts(attempts + 1);

    if (guessNumber === randomNumber) {
      setIsCorrect(true);
      setHint("정답입니다!");
      alert("정답");
    } else if (guessNumber < randomNumber) {
      setHint("Up! ");
    } else {
      setHint("Down!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        랜덤 숫자 맞추기 게임
      </h1>

      <RandomNumber randomNumber={randomNumber} isCorrect={isCorrect} />

      <Form onGuess={handleGuess} isCorrect={isCorrect} />

      {hint && (
        <div className="mt-4 p-3 rounded-lg text-center font-semibold">
          {hint}
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">시도 횟수: {attempts}</p>
      </div>
    </div>
  );
}
