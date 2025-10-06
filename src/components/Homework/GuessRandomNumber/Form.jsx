import React, { useState } from "react";

export default function Form({ onGuess,  isCorrect }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onGuess(inputValue);
    setInputValue("");
  };

  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="1부터 100 사이의 숫자를 입력하세요"
            min="1"
            max="100"
            disabled={isCorrect}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <button
          type="submit"
          disabled={isCorrect || !inputValue}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isCorrect ? "정답" : "제출"}
        </button>
      </form>
    </div>
  );
}
