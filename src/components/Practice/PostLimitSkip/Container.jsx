import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

export default function Container() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );
      setPosts(response["data"]["posts"]);
    }
    fetchPosts();
  }, [skip]);

  function onNext() {
    if (skip + limit <= 250) {
      setSkip(skip + limit);
    } else {
      alert("더 이상 다음 페이지가 없습니다.");
    }
  }

  function onPrevious() {
    if (skip - limit >= 0) {
      setSkip(skip - limit);
    } else {
      alert("더 이상 이전 페이지가 없습니다.");
    }
  }

  function onFirst() {
    setSkip(0);
  }
  function onLast() {
    setSkip(250);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => onFirst()}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          처음으로
        </button>
        <button
          onClick={() => onPrevious()}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          이전
        </button>
        <button
          onClick={() => onNext()}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          다음
        </button>
        <button
          onClick={() => onLast()}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
