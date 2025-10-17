import { Component } from "react";
import { FunctionalTimer } from "./FunctionalTimer";

export class ClassTrafficLight extends Component {
  state = {
    colorIndex: 0,
  };

  colors = ["red", "green", "yellow"];

  nextColor = () => {
    this.setState({
      colorIndex:
        this.state.colorIndex == 0
          ? this.colors.length - 1
          : this.state.colorIndex - 1,
    });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {this.colors.map((color, index) => {
            return (
              <div
                key={color}
                className={`circle ${index === this.state.colorIndex ? color : "black"}`}
              ></div>
            );
          })}
        </div>
        <button className="next-state-button" onClick={this.nextColor}>
          Next State
        </button>
        <FunctionalTimer setColor={this.nextColor} />
      </div>
    );
  }
}
