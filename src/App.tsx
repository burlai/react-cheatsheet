import React from "react";
import "./App.css";

const Heading: React.FC = () => {
  return (
    <header>
      <h1 className="h1">React Cheet Sheet</h1>
      <h2 className="h2">Your own React pocket guide</h2>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Heading />
    </div>
  );
};

export default App;
