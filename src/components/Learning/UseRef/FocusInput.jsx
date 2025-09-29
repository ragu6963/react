import { useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  // 컴포넌트가 렌더링 될 때 입력 요소에 자동 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 버튼 클릭 시 입력 요소에 포커스
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        ref={inputRef}
        type="text"
        placeholder="자동 포커스됨"
      />
      <button onClick={handleFocus}>포커스 맞추기</button>
    </div>
  );
}
