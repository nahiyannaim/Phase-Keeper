import React from "react";
import "../styles/phase.css";

const Phase = props => {
  const getClassName = () => {
    const index = props.mainList.findIndex(item => {
      return item.name === props.playerName;
    });

    const currentValue = props.mainList[index].phaseValues[props.phaseNum - 1];
    let className = "phase-circle-complete";

    if (currentValue === 0) {
      className = "phase-circle-default";
    } else if (currentValue === 1) {
      className = "phase-circle-call";
    }

    return className;
  };

  const phaseClick = () => {
    props.handlePhaseClick(props.playerName, props.phaseNum);
  };

  return (
    <button
      className={getClassName()}
      type="button"
      onClick={phaseClick}
      title="Call Phase"
    >
      <p className="phase-number">{props.phaseNum}</p>
    </button>
  );
};

export default Phase;
