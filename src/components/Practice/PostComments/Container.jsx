import React from "react";
import Post from "./Post";
import Comment from "./Comment";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Container() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(`https://dummyjson.com/posts/1`);
      setPost(response["data"]);
    }
    async function getComments() {
      const response = await axios.get(
        `https://dummyjson.com/posts/1/comments`
      );
      setComments(response["data"]["comments"]);
    }
    getPosts();
    getComments();
  }, []);

  async function handleSearch() {
    const postResponse = await axios.get(
      `https://dummyjson.com/posts/${postId}`
    );
    const commentResponse = await axios.get(
      `https://dummyjson.com/posts/${postId}/comments`
    );
    setPost(postResponse["data"]);
    setComments(commentResponse["data"]["comments"]);
  }
  function handleChange(event) {
    setPostId(event["target"]["value"]);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex gap-2 mb-6">
        <label className="flex gap-2 items-center">
          글 번호
          <input
            type="number"
            placeholder="게시글 번호"
            value={postId}
            onChange={(event) => {
              handleChange(event);
            }}
            className="border p-1"
          />
        </label>
        <button
          onClick={() => {
            handleSearch();
          }}
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer"
        >
          검색
        </button>
      </div>
      <Post post={post} />
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">댓글</h2>
        {comments.length > 0
          ? comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))
          : "댓글이 없습니다"}
      </div>
    </div>
  );
}
