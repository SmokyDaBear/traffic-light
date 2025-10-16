import { Component } from "react";
import { FunctionalTimer } from "./FunctionalTimer";
import type { CurrentColor } from "./types";
export class ClassTrafficLight extends Component {
  state = {
    color: "red" as CurrentColor,
  };
  nextColor = () => {
    const colorMap = {
      red: "green",
      green: "yellow",
      yellow: "red",
    };

    this.setState({ color: colorMap[this.state.color] });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={
              this.state.color === "red" ? "circle red" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.color === "yellow" ? "circle yellow" : "circle black"
            }
          ></div>
          <div
            className={
              this.state.color === "green" ? "circle green" : "circle black"
            }
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextColor}>
          Next State
        </button>
        <FunctionalTimer setColor={this.nextColor} />
      </div>
    );
  }
}
