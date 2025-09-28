import { useState } from "react";

export default function InputCheck() {
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {!text && <p style={{ color: "gray" }}>값을 입력하세요.</p>}
    </div>
  );
}
