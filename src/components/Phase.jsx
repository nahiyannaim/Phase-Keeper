import React from "react";
import "../styles/phase.css";

const Phase = props => {
  const handlePhaseClick = () => {
    alert("lol");
  };

  return (
    <button className="phase-circle" type="button" onClick={handlePhaseClick}>
      <p className="phase-number">{props.phaseNum}</p>
    </button>
  );
};

export default Phase;
