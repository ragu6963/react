// src/components/UseEffect/PostList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 콜백 함수 내부에 정의한 비동기 함수
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/posts");
      setPosts(response["data"]["posts"]);
    }

    // 비동기 함수 호출
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
