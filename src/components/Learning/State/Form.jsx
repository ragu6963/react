import { useState } from "react";

export default function Form() {
  // 폼 입력 필드의 상태들을 하나의 객체로 관리한다.
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  // 입력 필드의 상태를 업데이트 하는 함수
  const handleChange = (e) => {
    // 입력 필드의 name 속성 값을 추출한다.
    // 상태 객체의 키 역할을 한다.
    const name = e.target.name;

    // 입력 필드의 값을 추출한다.
    const value = e.target.value;

    // 또는
    // const { name, value } = e.target;

    // name은 동적으로 변하는 값이므로 []를 사용해서 동적으로 접근한다.
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input type="text" name="age" value={form.age} onChange={handleChange} />
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
    </div>
  );
}
