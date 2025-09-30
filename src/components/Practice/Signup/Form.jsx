import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    level: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e["target"];
    let password;
    let passwordConfirm;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 비밀번호 실시간 유효성 검사
    if (name === "password" || name === "passwordConfirm") {
      setPasswordError("");
    }

    if (name === "password") {
      password = value;
      passwordConfirm = formData["passwordConfirm"];
    }

    if (name === "passwordConfirm") {
      passwordConfirm = value;
      password = formData["password"];
    }

    if (name === "password" || name === "passwordConfirm") {
      if (password.length < 8) {
        setPasswordError("비밀번호는 8글자 이상이어야 합니다.");
      } else if (passwordConfirm && password !== passwordConfirm) {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordError) {
      alert(passwordError);
      return;
    }

    // 제출된 정보를 alert로 표시
    const submitInfo = `
회원가입 정보:
이메일: ${formData.email}
비밀번호: ${"*".repeat(formData.password.length)}
레벨: ${formData.level || "선택 없음"}
    `;

    alert(submitInfo);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center mt-8">회원가입</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일"
            required
            className="w-full p-2 border"
          />
        </div>

        <div className="mb-3">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
            required
            className="w-full p-2 border"
          />
        </div>

        <div className="mb-3">
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            placeholder="비밀번호 확인"
            required
            className="w-full p-2 border"
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </div>

        <div className="mb-3">
          <label>레벨</label>
          <div>
            <label>
              <input
                type="radio"
                name="level"
                value="신입"
                checked={formData.level === "신입"}
                onChange={handleInputChange}
                required
              />
              신입
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="주니어"
                checked={formData.level === "주니어"}
                onChange={handleInputChange}
                required
              />
              주니어
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="시니어"
                checked={formData.level === "시니어"}
                onChange={handleInputChange}
                required
              />
              시니어
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 cursor-pointer"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
