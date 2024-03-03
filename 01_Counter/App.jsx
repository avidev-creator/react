import { useState } from "react";

import "./App.css";
import Cards from "./components/Cards";

function App() {
  let [count, setCount] = useState(0);

  function addValue() {
    if (count >= 10) {
      return setCount(count);
    } else {
      return setCount(count + 1);
    }
  }

  function removeValue() {
    if (count <= 0) {
      return setCount(count);
    } else {
      return setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Count The Clicks</h1>
      <br />
      <h2>
        <i>Clicks: {count}</i>
      </h2>
      <br />
      <button
        onClick={addValue}
        style={{ padding: "5px", margin: "5px", width: "100px" }}
      >
        Add
      </button>
      <button
        onClick={removeValue}
        style={{ padding: "5px", margin: "5px", width: "100px" }}
      >
        Remove
      </button>

      <div>
        <Cards />
      </div>
    </>
  );
}

export default App;
