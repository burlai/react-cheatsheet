import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoItem from "./components/TodoItem";

const App: React.FC = () => {
  return (
    <div className="App">
      <Heading />
      <ul>
        <TodoItem name="go to gym" isDone />
        <TodoItem name="wash the dishes" />
        <TodoItem name="clean the house" />
      </ul>
    </div>
  );
};

export default App;
