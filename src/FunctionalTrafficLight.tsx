import { useState } from "react";
import { FunctionalTimer } from "./FunctionalTimer";

export const FunctionalTrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [colorIndex, setColorIndex] = useState(0);
  const nextColor = () =>
    setColorIndex(colorIndex === 0 ? colors.length - 1 : colorIndex - 1);
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {colors.map((color, index) => (
          <div
            className={`circle ${colorIndex === index ? color : "black"}`}
          ></div>
        ))}
      </div>
      <button className="next-state-button" onClick={nextColor}>
        Next State
      </button>
      <FunctionalTimer setColor={nextColor} />
    </div>
  );
};
