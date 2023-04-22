import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import { SayHello } from "./components/SayHello";

const App: React.FC = () => {
  return (
    <div className="App">
      <SayHello greetingOne="Hello" />
      <Heading />
    </div>
  );
};

export default App;
