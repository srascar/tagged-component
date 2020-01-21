import React from "react";
import TextImage from "./components/TextImage";
import "./components/styles/main.css";
import data from "./fixtures/home";

console.log({ data });

function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="row">
          {data.blocks.map((block, i) =>
            block.type === "text_image" ? (
              <TextImage key={i} {...block.settings} />
            ) : null
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
