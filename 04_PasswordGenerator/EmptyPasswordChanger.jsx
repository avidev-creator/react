import "./App.css";

function App() {
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-yellow-300 rounded-lg px-4 py-3 my-8 bg-blue-600 shadow-md">
        <h1 className="text-yellow-400 font-bold text-center my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
          />
          <button className="outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-yellow-400">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={8}
              max={16}
              defaultValue={8}
              className="cursor-pointer "
            />
            <label>Length: </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="characterInput" />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
