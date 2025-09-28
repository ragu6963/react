// src/components/DataFetching/Post.jsx

export default function Post({ post }) {
  return (
    <li key={post.id}>
      No. {post.id} {post.title}
    </li>
  );
}
