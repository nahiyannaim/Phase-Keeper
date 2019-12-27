import React from "react";
import "../styles/box.css";
import Phase from "./Phase";

class Box extends React.Component {
  winner = () => {
    this.props.handleWinner(this.props.playerName);
  };

  render() {
    return (
      <div className="box">
        <button onClick={this.winner}>Winner</button>

        <div className="box-header">
          <p>{this.props.playerName}</p>
        </div>

        <div className="box-content">
          <Phase
            phaseNum={1}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={2}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={3}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={4}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={5}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={6}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={7}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={8}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={9}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
          <Phase
            phaseNum={10}
            playerName={this.props.playerName}
            mainList={this.props.mainList}
            handlePhaseClick={this.props.phaseClick}
          />
        </div>
      </div>
    );
  }
}

export default Box;
