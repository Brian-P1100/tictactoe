import React, { Component } from 'react';
import Player from './Components/Player'
import './App.css';
import Square from './Components/Square';
import Board from './Components/Board';

  <div>
    <Board />
    <Player />
  </div>


class App extends Component {
  
  constructor() {
    super()
    this.state = {
      player_turn: "X",
      board: ["", "", "", "", "", "", "", "", "",]
    }
    
    this.squareClicked = this.squareClicked.bind(this)
  }


squareClicked(index) {
  let player_turn = this.state.player_turn
  let board = this.state.board

  board[index] = player_turn;
  let playerWinsIf = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  for (let i=0; i < playerWinsIf.length; i++) {
    let winningRow = playerWinsIf[i]
    let r1 = winningRow[0]
    let r2 = winningRow[1]
    let r3 = winningRow[2]
    if (board[r1] != "" && board[r1] == board[r2] && board[r2] && board[r3] == board[r3] && board[r3] == board[r1]) {
      alert(`Winnner! player ${player_turn} has won the game`)
    }
  }
  
  
  /*player_turn = (player_turn == "X") ? "O" : "X";
  console.log("player_turn", player_turn)
  this.setState({
    player_turn: player_turn,
    board: board
  })*/
  
}

  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map((square, index) => {
            return (<div onClick={() => this.state.Player(index)} className="square">{square}</div>)
          })}
        </div>        
      </div>
    );
  }
}

export default App;
