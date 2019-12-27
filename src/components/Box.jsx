import React from "react";
import "../styles/box.css";
import Phase from "./Phase";

const Box = props => {
  const winner = () => {
    props.handleWinner(props.playerName);
  };

  const renderPhases = () => {
    let phasesList = [];

    for (let i = 1; i <= 10; i++) {
      phasesList.push(
        <Phase
          key={i}
          phaseNum={i}
          playerName={props.playerName}
          mainList={props.mainList}
          handlePhaseClick={props.phaseClick}
        />
      );
    }
    return phasesList;
  };

  return (
    <div className="box">
      <button onClick={winner}>Winner</button>

      <div className="box-header">
        <p>{props.playerName}</p>
      </div>

      <div className="box-content"> {renderPhases()} </div>
    </div>
  );
};

export default Box;
