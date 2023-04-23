import React from "react";
import "./App.css";
import Heading from "./components/Heading";
// import TodoItem from "./components/TodoItem";
import ShoppingList from "./components/ShoppingList";

const App: React.FC = () => {
  const shopping = [
    "apples",
    "bread",
    "butter",
    "bananas",
    "milk",
    "chocolate",
  ];

  return (
    <div className="App">
      <Heading />
      <ShoppingList shopping={shopping} />
    </div>
  );
};

export default App;
