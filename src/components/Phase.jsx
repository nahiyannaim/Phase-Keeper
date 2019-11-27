import React from "react";
import "../styles/phase.css";

class Phase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  handlePhaseClick = () => {
    if (this.state.value === 0) {
      this.setState({ value: 1 });
    } else if (this.state.value === 1) {
      this.setState({ value: 0 });
    } else {
      this.setState({ value: 0 });
    }
  };

  handlePhaseDoubleClick = () => {
    this.setState({ value: 2 });
  };

  getClassName = () => {
    if (this.state.value === 0) {
      return "phase-circle-default";
    } else if (this.state.value === 1) {
      return "phase-circle-call";
    } else {
      return "phase-circle-complete";
    }
  };

  render() {
    return (
      <button
        className={this.getClassName()}
        type="button"
        onClick={this.handlePhaseClick}
        onDoubleClick={this.handlePhaseDoubleClick}
      >
        <p className="phase-number">{this.props.phaseNum}</p>
      </button>
    );
  }
}

export default Phase;
