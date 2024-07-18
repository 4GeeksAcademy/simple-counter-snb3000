import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";

function Home() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [alertTime, setAlertTime] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          if (alertTime && newCounter === parseInt(alertTime, 10)) {
            alert(`Time reached: ${alertTime} seconds`);
          }
          return newCounter;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, alertTime]);

  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };
  const handleResume = () => setIsRunning(true);

  const handleAlertTimeChange = (event) => {
    setAlertTime(event.target.value);
  };

  const digitFour = Math.floor(counter / 1000);
  const digitThree = Math.floor((counter % 1000) / 100);
  const digitTwo = Math.floor((counter % 100) / 10);
  const digitOne = counter % 10;

  return (
    <div>
      <SimpleCounter
        digitFour={digitFour}
        digitThree={digitThree}
        digitTwo={digitTwo}
        digitOne={digitOne}
      />
      <div className="controls">
        <button className="btn btn-primary" onClick={handleStop}>
          Stop
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-success" onClick={handleResume}>
          Resume
        </button>
      </div>
      <div className="alert-time-input">
        <label htmlFor="alert-time">Alert Time (seconds): </label>
        <input
          type="number"
          id="alert-time"
          value={alertTime || ""}
          onChange={handleAlertTimeChange}
        />
      </div>
    </div>
  );
}

export default Home;
