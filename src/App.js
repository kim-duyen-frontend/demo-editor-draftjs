import React from "react";
import EditorText from "./components/EditorText";
import EditorTextHook from "./components/EditorTextHook";

const App = () => {
  return (
    <div className="App">
      <EditorText />
      <hr />
      <EditorTextHook />
    </div>
  );
}

export default App;
