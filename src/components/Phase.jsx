import React from "react";
import "../styles/phase.css";

class Phase extends React.Component {
  getClassName = () => {
    const index = this.props.mainList.findIndex(item => {
      return item.name === this.props.playerName;
    });

    const currentValue = this.props.mainList[index].phaseValues[
      this.props.phaseNum - 1
    ];

    if (currentValue === 0) {
      return "phase-circle-default";
    } else if (currentValue === 1) {
      return "phase-circle-call";
    } else {
      return "phase-circle-complete";
    }
  };

  phaseClick = () => {
    this.props.handlePhaseClick(this.props.playerName, this.props.phaseNum);
  };

  render() {
    return (
      <button
        className={this.getClassName()}
        type="button"
        onClick={this.phaseClick}
      >
        <p className="phase-number">{this.props.phaseNum}</p>
      </button>
    );
  }
}

export default Phase;
