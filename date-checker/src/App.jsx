import { useState } from "react";
import "./App.css";

// const days = {
//   0: 'Sunday',
//   1: 'Monday',
//   2: 'Tuesday',
//   3: 'Wednesday',
//   4: 'Thursday',
//   5: 'Friday',
//   6: 'Saturday'
// }

function App() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);
  const [date, setDate] = useState(new Date());

  function increaseCount() {
    setCount((c) => c + steps);
    setDate(
      (prevDate) => new Date(prevDate.getTime() + steps * 24 * 60 * 60 * 1000)
    );
  }

  function decreaseCount() {
    setCount((c) => c - steps);
    setDate(
      (prevDate) => new Date(prevDate.getTime() - steps * 24 * 60 * 60 * 1000)
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <button className="btn" onClick={decreaseCount}>
            -
          </button>
          <p>Count</p>
          <button className="btn" onClick={increaseCount}>
            +
          </button>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <button className="btn" onClick={() => setSteps(steps - 1)}>
            -
          </button>
          <p>Steps</p>
          <button className="btn" onClick={() => setSteps(steps + 1)}>
            +
          </button>
        </div>
        <div>
          <p className="message">
            Steps : {steps} | Count: {count} | Date : {date.getDate()} :{" "}
            {date.toLocaleString("default", { month: "long" })} :{" "}
            {date.toLocaleString("default", { weekday: "long" })} : {" "}
            {date.getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
