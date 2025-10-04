export default function Todo({ todo, onDelete, onComplete }) {
  return (
    <div
      className="border-4 p-4 flex flex-col justify-between"
      style={{ borderColor: todo.color }}
    >
      <div>
        <p className="text-gray-800 mb-2">
          {todo.completed ? "✅" : "❌"} {todo.content}
        </p>
        <span className="px-2 py-1 rounded-full text-xs">
          우선순위 : {todo.priority}
        </span>
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => onComplete(todo.id)}
          className={
            todo.completed
              ? "mt-3 px-3  py-1 cursor-pointer border-2 bg-orange-500 text-white"
              : "mt-3 px-3  py-1 cursor-pointer border-2 bg-green-500 text-white"
          }
        >
          {todo.completed ? "완료 취소" : "완료"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="mt-3 px-3 py-1 cursor-pointer border-2 bg-red-500 text-white"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
