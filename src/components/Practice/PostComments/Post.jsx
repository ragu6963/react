import React from "react";

export default function Post({ post }) {
  return (
    <div className="border p-6">
      <h1 className="text-2xl font-bold mb-2">
        No. {post.id} {post.title}
      </h1>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <p className="text-sm text-gray-500">userId: {post.userId}</p>
      <p className="text-sm text-gray-500">views: {post.views}</p>
    </div>
  );
}
