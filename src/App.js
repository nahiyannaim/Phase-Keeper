import React from "react";
import "./App.css";
import Header from "./components/Header";
import Box from "./components/Box";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      playerNames: []
    };
  }

  onChangeValue = event => {
    if (this.state.playerNames.length < 6) {
      this.setState({ value: event.target.value });
    } else {
      alert("Maximum 6 players allowed.");
    }
  };

  playerExists = () => {
    return this.state.playerNames
      .toString()
      .toUpperCase()
      .includes(this.state.value.toString().toUpperCase());
  };

  handleAddPlayer = () => {
    if (this.playerExists()) {
      alert("This player is already added. Please enter a different name.");
    } else {
      this.setState(state => {
        const playerNames = state.playerNames.concat(state.value);
        return {
          playerNames,
          value: ""
        };
      });
    }
  };

  renderPlayers() {
    let playerNamesList = [];

    this.state.playerNames.forEach(name => {
      playerNamesList.push(<Box key={name} playerName={name} />);
    });

    return <div className="playersBoxes">{playerNamesList}</div>;
  }

  renderAddPlayerButton() {
    return (
      <div className="addContainer">
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
        />
        <button
          className="addButton"
          type="button"
          onClick={this.handleAddPlayer}
          disabled={!this.state.value}
        >
          <i className="fa fa-plus"> </i>
          Add Player
        </button>
      </div>
    );
  }

  renderPhasesList() {
    return (
      <div className="phasesList">
        <p>
          <strong>Phase 1 </strong> : 2 sets of 3
        </p>
        <p>
          <strong>Phase 2 </strong> : 1 set of 3 and 1 run of 4
        </p>
        <p>
          <strong>Phase 3 </strong> : 1 set of 4 and 1 run of 4
        </p>
        <p>
          <strong>Phase 4 </strong> : 1 run of 7
        </p>
        <p>
          <strong>Phase 5 </strong> : 1 run of 8{" "}
        </p>
        <p>
          <strong>Phase 6 </strong> : 1 run of 9
        </p>
        <p>
          <strong>Phase 7 </strong> : 2 sets of 4
        </p>
        <p>
          <strong>Phase 8 </strong> : 7 cards of one color
        </p>
        <p>
          <strong>Phase 9 </strong> : 1 set of 5 and 1 set of 2
        </p>
        <p>
          <strong>Phase 10 </strong> : 1 set of 5 and 1 set of 3
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderPhasesList()}

        <Header />
        {this.renderAddPlayerButton()}
        {this.renderPlayers()}
      </div>
    );
  }
}

export default App;
