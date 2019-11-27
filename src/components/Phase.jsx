import React from "react";
import "../styles/phase.css";

const Phase = props => {
  return (
    <div className="phase-circle">
      <p className="phase-number">{props.phaseNum}</p>
    </div>
  );
};

export default Phase;
