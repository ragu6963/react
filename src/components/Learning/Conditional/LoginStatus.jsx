import { useState } from "react";

export default function LoginStatus() {
  // 로그인 상태
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 버튼 클릭 시 로그인 상태 변경
  function handleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      <p>{isLogin ? "환영합니다!" : "로그인 해주세요."}</p>
      <button onClick={handleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
    </div>
  );
}
