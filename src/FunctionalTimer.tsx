import { useEffect, useState } from "react";
import "./timer.css";

export function FunctionalTimer({ setColor }: { setColor: () => void }) {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(1);

  //First time using useEffect, is this a good way to do this? Tried to abstract the function, but couldn't get it to work
  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isRunning) setColor();
    }, seconds * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, seconds, setColor]);

  return (
    <div className="timer-container">
      <p>Functional Timer</p>
      <button className="timer-btn" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <input
        type="range"
        step="0.1"
        min="0.1"
        max="10"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
      />
      <p>Delay: {seconds} seconds</p>
    </div>
  );
}
