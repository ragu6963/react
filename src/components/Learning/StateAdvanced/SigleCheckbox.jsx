import { useState } from "react";

export default function SingleCheckbox() {
  // 체크박스 요소의 체크 여부를 관리하는 상태(State)
  // true : 체크 상태, false : 체크 안 됨 상태
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    // 체크박스 요소의 체크 상태를 상태 변경 함수로 전달

    // event.target.checked는 현재 체크박스의 체크 상태(true/false)를 담고 있다
    setIsChecked(event.target.checked);
  }

  return (
    <div>
      <h3>단일 체크박스</h3>
      <label>
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheckboxChange(e);
          }}
        />
        약관에 동의합니다.
      </label>
      <p>동의 여부: {isChecked ? "동의함" : "동의 안 함"}</p>
    </div>
  );
}
