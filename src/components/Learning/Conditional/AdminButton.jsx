import { useState } from "react";

export default function AdminButton() {
  const [isAdmin, setIsAdmin] = useState(false);

  function handleClick() {
    setIsAdmin(!isAdmin);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isAdmin ? "일반 사용자 전환" : "관리자 전환"}
      </button>
      <p>현재 상태 : {isAdmin ? "관리자" : "일반 사용자"}</p>
      {isAdmin && <a>관리 페이지 이동</a>}
    </div>
  );
}
