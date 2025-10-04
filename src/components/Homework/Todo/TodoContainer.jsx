import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState, useEffect, useMemo } from "react";
import TodoFilter from "./TodoFilter";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    const storageTodos = getStorageTodos();

    if (storageTodos) {
      setTodos(storageTodos);
    } else {
      setTodos([]);
    }
  }, []);

  function setStorageTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getStorageTodos() {
    try {
      const storageTodos = localStorage.getItem("todos");
      return storageTodos ? JSON.parse(storageTodos) : [];
    } catch (error) {
      console.error("localStorage 접근 오류:", error);
      return [];
    }
  }

  const filteredTodosMemo = useMemo(() => {
    const filterMap = {
      all: () => todos,
      incomplete: () => todos.filter((todo) => !todo.completed),
      completed: () => todos.filter((todo) => todo.completed),
    };
    return filterMap[currentFilter]?.() || todos;
  }, [currentFilter, todos]);

  function handleAddTodo(todo) {
    const newTodo = {
      ...todo,
      id: Date.now(),
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setStorageTodos(updatedTodos);
  }

  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setStorageTodos(updatedTodos);
  }

  function handleCompleteTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setStorageTodos(updatedTodos);
  }

  function handleFilter(filter) {
    setCurrentFilter(filter);
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoFilter onFilter={handleFilter} />
      {filteredTodosMemo.length === 0 && (
        <p className="text-center text-gray-500">할 일이 없습니다.</p>
      )}
      <div className="mt-6 w-full flex flex-col gap-4">
        {filteredTodosMemo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onComplete={handleCompleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
