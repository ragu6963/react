// Toggle.jsx
import { useState } from "react";

export default function Toggle() {
  // 체크박스 상태 관리
  const [isChecked, setIsChecked] = useState(false);

  const handleSingleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleSingleToggle}
          />
          동의합니다
        </label>
      </div>
    </div>
  );
}
