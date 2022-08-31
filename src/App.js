import React from "react";
import EditorText from "./components/EditorText";
import EditorTextHook from "./components/EditorTextHook";

const App = () => {
  return (
    <div className="App">
      <h1 className="introduce">Editor written by class and hooks</h1>
      <p className="author"><strong>Made by</strong> Ngô Thị Kim Duyên - 31/8/2022</p>
      <div className="container">
        <h3>✨✨Version class✨✨</h3>
        <EditorText />
        <h3>✨✨ ❤️️Version hooks ❤️️✨✨</h3>
        <EditorTextHook />
      </div>
    </div>
  );
}

export default App;
