import { useState } from "react";

export default function MultipleCheckboxes() {
  const options = [
    { id: 1, value: "스포츠" },
    { id: 2, value: "음악" },
    { id: 3, value: "영화" },
    { id: 4, value: "여행" },
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  function handleCheckboxChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      // 체크한 경우, 상태 배열에 새로운 값을 추가한다
      setCheckedItems((prev) => [...prev, value]);
    } else {
      // 체크 해제된 경우, 상태 배열에서 해당 값을 필터링하여 제거한다
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  }

  return (
    <div>
      {/* 체크박스 목록을 리스트 렌더링을 활용해서 표현 */}
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            // 체크박스의 값
            value={option.value}
            // 현재 항목이 checkedItems 배열에 포함되어 있는지 여부로 checked 상태를 결정한다
            checked={checkedItems.includes(option.value)}
            onChange={(e) => {
              handleCheckboxChange(e);
            }}
          />
          {option.value}
        </label>
      ))}
      <div>
        <span>선택한 관심사</span>
        {checkedItems.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
}
