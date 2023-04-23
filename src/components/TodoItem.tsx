import React from "react";

interface TodoItemInterface {
  name: string;
  isDone?: boolean;
}

const TodoItem: React.FC<TodoItemInterface> = ({ name, isDone = false }) => {
  return <li className="todo">{isDone ? <del>{`${name} ✔`}</del> : name}</li>;
};

export default TodoItem;
