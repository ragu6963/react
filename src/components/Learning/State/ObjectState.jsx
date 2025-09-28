import { useState } from "react";

export default function ObjectState() {
  const [objectState, setObjectState] = useState({
    age: 19,
    name: "홍길동",
  });

  const deleteObjectState = () => {
    // 구조 분해 할당과 나머지 연산자를 사용해서 삭제할 속성을 분리
    // age 속성만 분리
    const { age, ...rest } = objectState;

    // 삭제할 속성을 제외(rest)한 새로운 객체로 상태 업데이트
    setObjectState(rest);
  };

  return (
    <div>
      <p>이름 : {objectState.name}</p>
      <p>나이 : {objectState.age || "없음"}</p>
      <button
        onClick={() => {
          deleteObjectState();
        }}
      >
        나이 제거
      </button>
    </div>
  );
}
