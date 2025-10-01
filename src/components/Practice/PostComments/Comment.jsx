import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="bg-gray-50 border-l-4 border-blue-200 p-4 mb-3">
      <p className="text-gray-800 text-lg mb-2">{comment.body}</p>
      <p className="text-md text-gray-500">{comment.user.username}</p>
      <p className="text-sm text-gray-500">❤ {comment.likes}</p>
    </div>
  );
}
