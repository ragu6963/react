import React from "react";

export default function RandomNumber({ randomNumber, isCorrect }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-lg font-semibold mb-2">정답 숫자</h2>
      <div className="text-4xl font-bold text-blue-600">
        {isCorrect ? randomNumber : "???"}
      </div>
    </div>
  );
}
