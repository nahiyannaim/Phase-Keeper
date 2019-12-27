import React from "react";
import "../styles/phase.css";

const Phase = props => {
  const getClassName = () => {
    const index = props.mainList.findIndex(item => {
      return item.name === props.playerName;
    });

    const currentValue = props.mainList[index].phaseValues[props.phaseNum - 1];

    if (currentValue === 0) {
      return "phase-circle-default";
    } else if (currentValue === 1) {
      return "phase-circle-call";
    } else {
      return "phase-circle-complete";
    }
  };

  const phaseClick = () => {
    props.handlePhaseClick(props.playerName, props.phaseNum);
  };

  return (
    <button className={getClassName()} type="button" onClick={phaseClick}>
      <p className="phase-number">{props.phaseNum}</p>
    </button>
  );
};

export default Phase;
