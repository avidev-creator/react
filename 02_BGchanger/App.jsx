import "./App.css";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white bg-red-600 shadow-lg"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-300"
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
