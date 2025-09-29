import { useRef, useEffect } from "react";

export default function Component() {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div>
      <input className="border-2 border-gray-300 rounded-md p-2" ref={ref} />
    </div>
  );
}
