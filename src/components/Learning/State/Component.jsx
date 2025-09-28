import { useState } from "react";

export default function Component() {
  // 초기 값이 숫자 0인 상태를 생성한다.
  const [objectState, setObjectState] = useState({
    age: 19,
    name: "홍길동",
  });

  const updateObjectState = () => {
    // 상태는 직접 변경할 수 없다.
    // objectState.age = objectState.age + 1 ❎
    // objectState.name = "전우치" ❎

    const newObjectState = {
      age: objectState.age,
      name: "전우치",
    };
    setObjectState(newObjectState);

    setObjectState({
      ...objectState,
      age: objectState.age + 1,
    }); // 🅾️
  };
}
