import { useRef } from "react";

export default function ScrollExample() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div ref={topRef}>
        <h2>페이지 상단</h2>
        <button onClick={scrollToBottom}>하단으로 이동</button>
      </div>

      <div className="h-[2000px] p-4">
        <p>긴 내용...</p>
      </div>

      <div ref={bottomRef}>
        <h2>페이지 하단</h2>
        <button onClick={scrollToTop}>상단으로 이동</button>
      </div>
    </div>
  );
}
