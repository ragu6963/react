import { useState, useEffect } from "react";

export default function UserInfo() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userAuth, setUserAuth] = useState("");

  function handleAdmin() {
    setIsAdmin(!isAdmin);
  }

  function handleLogin() {
    setIsLogin(!isLogin);
  }

  useEffect(() => {
    if (isAdmin === true && isLogin === true) {
      setUserAuth("관리자");
    } else if (isAdmin === false && isLogin === true) {
      setUserAuth("일반 사용자");
    } else {
      setUserAuth("비 로그인");
    }
  }, [isAdmin, isLogin]);

  return (
    <div>
      <p>현재 상태 : {userAuth}</p>
      <p>관리자 상태 : {isAdmin ? "관리자" : "일반 사용자"}</p>
      <p>로그인 상태 : {isLogin ? "로그인" : "로그아웃"}</p>
      <button onClick={handleAdmin}>관리자 전환</button>
      <button onClick={handleLogin}>로그인 전환</button>
    </div>
  );
}
