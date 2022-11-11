import React, { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  function handlePoints(e) {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  }

  function handleUndo() {
    const newPoints = [...points];
    const poppedPoints = newPoints.pop();
    if (!poppedPoints) return;
    setPopped([...popped, poppedPoints]);
    setPoints(newPoints);
  }

  function handleRedo(params) {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={handlePoints}>
        {points.map((point, i) => (
          <div
            key={i}
            style={{ left: point.x - 5 + "px", top: point.y - 5 + "px" }}
            className="point"
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
