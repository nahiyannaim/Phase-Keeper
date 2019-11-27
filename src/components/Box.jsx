import React from "react";
import "../styles/box.css";
import Phase from "./Phase";

const Box = props => {
  return (
    <div className="box">
      <div className="box-header">
        <p>{props.playerName}</p>
      </div>

      <div className="box-content">
        <Phase phaseNum={1} />
        <Phase phaseNum={2} />
        <Phase phaseNum={3} />
        <Phase phaseNum={4} />
        <Phase phaseNum={5} />
        <Phase phaseNum={6} />
        <Phase phaseNum={7} />
        <Phase phaseNum={8} />
        <Phase phaseNum={9} />
        <Phase phaseNum={10} />
      </div>
    </div>
  );
};

export default Box;
