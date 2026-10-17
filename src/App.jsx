import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  function clickButton(value) {
    if (value === "C") {
      setDisplay("");
    }
    else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    }
    else {
      setDisplay(display + value);
    }
  }

  const buttons = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className="app">

      <div className="calculator">

        <h1>Smart Calculator</h1>

        <input
          type="text"
          value={display}
          readOnly
          placeholder="0"
        />

        <div className="buttons">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => clickButton(button)}
              className={
                button === "="
                  ? "equal"
                  : button === "C"
                    ? "clear"
                    : ""
              }
            >
              {button}
            </button>
          ))}
        </div>

        <p>React JS Mini Project</p>

      </div>

    </div>
  );
}

export default App;