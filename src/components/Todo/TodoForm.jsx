import { useState } from "react";

const priority = [
  { id: 1, value: "낮음" },
  { id: 2, value: "중간" },
  { id: 3, value: "높음" },
];

export default function TodoForm({ onAddTodo }) {
  const [form, setForm] = useState({
    content: "",
    color: "#000000",
    priority: "낮음",
  });

  function handleFormChange(e) {
    setForm({ ...form, [e["target"]["name"]]: e["target"]["value"] });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddTodo({
      content: form["content"],
      color: form["color"],
      priority: form["priority"],
    });

    clearForm();
  }

  function clearForm() {
    setForm({
      content: "",
      color: "#000000",
      priority: "낮음",
    });
  }

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="">
          <label>
            할 일
            <input
              type="text"
              placeholder="할 일"
              name="content"
              className="w-full p-2 border"
              value={form.content}
              onChange={handleFormChange}
              required
            />
          </label>
        </div>
        <div className="">
          <label>
            색상
            <input
              type="color"
              name="color"
              className="w-full border cursor-pointer"
              value={form.color}
              onChange={handleFormChange}
            />
          </label>
        </div>
        <div className="   gap-2">
          <p>우선순위</p>
          <div className="flex gap-6 justify-center">
            {priority.map((item) => (
              <label className="" key={item["id"]}>
                {item["value"]}
                <input
                  type="radio"
                  name="priority"
                  value={item["value"]}
                  checked={form.priority === item["value"]}
                  onChange={handleFormChange}
                />
              </label>
            ))}
          </div>
        </div>
        <button className="w-full p-2 bg-blue-500 text-white cursor-pointer">
          할 일 추가
        </button>
      </form>
    </div>
  );
}
