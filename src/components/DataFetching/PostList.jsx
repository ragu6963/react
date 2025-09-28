// src/components/DataFetching/PostList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
