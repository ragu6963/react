import React from "react";

export default function TodoFilter({ onFilter }) {
  return (
    <div className="flex justify-end gap-4 mt-8">
      <button
        className="px-3 py-1 border-2 border-blue-500 cursor-pointer"
        onClick={() => onFilter("incomplete")}
      >
        미 완료 할일 보기
      </button>
      <button
        className="px-3 py-1 border-2 border-blue-500 cursor-pointer"
        onClick={() => onFilter("completed")}
      >
        완료 할일 보기
      </button>
      <button
        className="px-3 py-1 border-2 border-blue-500 cursor-pointer"
        onClick={() => onFilter("all")}
      >
        초기화
      </button>
    </div>
  );
}
