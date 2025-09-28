// UserProfile.jsx

// 함수 매개변수에서 구조 분해 할당을 활용해서 값을 꺼낸다.
export default function UserProfile({ name, age }) {
  return (
    <div>
      저는 {name}이고, {age}세 입니다.
    </div>
  );
}
