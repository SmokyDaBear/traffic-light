import { useState } from "react";
import { FunctionalTimer } from "./FunctionalTimer";

export const FunctionalTrafficLight = () => {
  const [color, setColor] = useState("red");
  const nextColor = () =>
    setColor(color === "red" ? "green" : color === "green" ? "yellow" : "red");
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={color === "red" ? "circle red" : "circle black"}></div>
        <div
          className={color === "yellow" ? "circle yellow" : "circle black"}
        ></div>
        <div
          className={color === "green" ? "circle green" : "circle black"}
        ></div>
      </div>
      <button className="next-state-button" onClick={nextColor}>
        Next State
      </button>
      <FunctionalTimer setColor={nextColor} />
    </div>
  );
};
