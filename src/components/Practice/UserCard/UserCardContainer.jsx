import UserCard from "./components/UserCard/UserCard";

export default function Main() {
  const userData = {
    name: "김철수",
    age: 28,
    email: "kimcs@example.com",
    profileImage: `https://picsum.photos/id/237/200/300`,
  };

  const userData2 = {
    name: "이영희",
    age: 25,
    email: "leeyh@example.com",
    profileImage: `https://picsum.photos/id/238/200/300`,
  };

  const userData3 = {
    name: "홍길동",
    age: 30,
    email: "parkcs@example.com",
    profileImage: `https://picsum.photos/id/239/200/300`,
  };

  return (
    <>
      <UserCard userData={userData} />
      <UserCard userData={userData2} />
      <UserCard userData={userData3} />
    </>
  );
}
