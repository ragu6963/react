import { useState } from "react";

export default function DataLoading() {
  const [isLoading, setIsLoading] = useState(true);

  // 데이터 로딩 완료 가정
  function handleClick() {
    setIsLoading(!isLoading);
  }

  return (
    <div>
      {isLoading ? <p>로딩 중..</p> : <p>데이터 목록</p>}
      <button onClick={handleClick}>
        {isLoading ? "데이터 응답 완료" : "데이터 요청"}
      </button>
    </div>
  );
}
