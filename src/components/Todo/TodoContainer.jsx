import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState, useEffect } from "react";
import TodoFilter from "./TodoFilter";

const tempTodo = {
  id: 1,
  content: "예시",
  completed: false,
  color: "#000000",
  priority: "낮음",
};
export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    const storageTodos = localStorage.getItem("todos");

    if (storageTodos) {
      const parsedTodos = JSON.parse(storageTodos);
      setTodos(parsedTodos);
      setFilteredTodos(parsedTodos);
    } else {
      setTodos([tempTodo]);
      setFilteredTodos([tempTodo]);
    }
  }, []);

  function applyFilter(todosList, filter) {
    if (filter === "all") {
      return todosList;
    } else if (filter === "incomplete") {
      return todosList.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todosList.filter((todo) => todo.completed);
    }
  }

  function handleAddTodo(todo) {
    const newTodo = {
      ...todo,
      id: Date.now(),
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setFilteredTodos(applyFilter(updatedTodos, currentFilter));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(applyFilter(updatedTodos, currentFilter));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
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
    setFilteredTodos(applyFilter(updatedTodos, currentFilter));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleFilter(filter) {
    setCurrentFilter(filter);
    setFilteredTodos(applyFilter(todos, filter));
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoFilter onFilter={handleFilter} />
      <div className="mt-6 w-full flex flex-col gap-4">
        {filteredTodos.map((todo) => (
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
