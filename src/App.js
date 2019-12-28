import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Box from "./components/Box";
import Dialog from "./components/Dialog";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      playerNames: [],
      warning: "",
      mainList: []
    };
  }

  onChangeValue = event => {
    if (this.state.playerNames.length < 6) {
      this.setState({ value: event.target.value, warning: "" });
    } else {
      this.setState({ warning: "Maximum 6 players allowed!" });
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
      this.setState({
        warning: "This player is already added, please enter a different name!"
      });
    } else {
      this.setState(state => {
        const playerNames = state.playerNames.concat(state.value);
        const mainList = [];
        playerNames.forEach(name => {
          mainList.push({
            name: name,
            phaseValues: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          });
        });

        return {
          playerNames,
          value: "",
          warning: "",
          mainList
        };
      });
    }
  };

  handleKeyboardPress = event => {
    if (event.key === "Enter") {
      this.handleAddPlayer();
    }
  };

  handlePhaseClick = (name, phaseNum) => {
    const index = this.state.mainList.findIndex(item => {
      return item.name === name;
    });

    const oldValue = this.state.mainList[index].phaseValues[phaseNum - 1];

    let tempList = this.state.mainList;

    if (oldValue === 0) {
      tempList[index].phaseValues[phaseNum - 1] = 1;
      this.setState({ mainList: tempList });
    } else if (oldValue === 1) {
      tempList[index].phaseValues[phaseNum - 1] = 0;
      this.setState({ mainList: tempList });
    } else {
      tempList[index].phaseValues[phaseNum - 1] = 0;
      this.setState({ mainList: tempList });
    }
  };

  handleWinner = name => {
    const tempList = this.state.mainList;
    const winnerIndex = tempList.findIndex(item => item.name === name);

    // Set Winning player phase to complete (2)
    for (let i = 0; i < tempList[winnerIndex].phaseValues.length; i++) {
      if (tempList[winnerIndex].phaseValues[i] === 1) {
        tempList[winnerIndex].phaseValues[i] = 2;
      }
    }

    // Reset phase calls for other players (0)
    Object.keys(tempList).forEach(key => {
      for (let i = 0; i < tempList[Number(key)].phaseValues.length; i++) {
        if (tempList[Number(key)].phaseValues[i] === 1) {
          tempList[Number(key)].phaseValues[i] = 0;
        }
      }
    });

    this.setState({ mainList: tempList });
  };

  handleDeletePlayer = name => {
    const tempMain = this.state.mainList;
    const tempNames = this.state.playerNames;
    let deleteIndex = -1;

    deleteIndex = tempMain.findIndex(item => item.name === name);

    if (deleteIndex !== -1) {
      tempMain.splice(deleteIndex, 1);

      deleteIndex = tempNames.findIndex(item => item === name);
      if (deleteIndex !== -1) {
        tempNames.splice(deleteIndex, 1);
      }
    }

    this.setState({ mainList: tempMain, playerNames: tempNames });
  };

  renderPlayers() {
    let playerNamesList = [];

    this.state.mainList.forEach(name => {
      playerNamesList.push(
        <Box
          key={name.name}
          playerName={name.name}
          mainList={this.state.mainList}
          phaseClick={this.handlePhaseClick}
          handleWinner={this.handleWinner}
          handleDeletePlayer={this.handleDeletePlayer}
        />
      );
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
          onKeyDown={this.handleKeyboardPress}
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

  renderWarningDialog() {
    return this.state.warning.length > 0 ? (
      <Dialog message={this.state.warning} />
    ) : null;
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
          <strong>Phase 5 </strong> : 1 run of 8
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
        {this.renderWarningDialog()}
        {this.renderPlayers()}
      </div>
    );
  }
}

export default App;
