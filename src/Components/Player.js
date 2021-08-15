import React, { Component } from 'react'

class Player extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             currentPlayer: "X"
        }
        this.togglePlayer = this.togglePlayer.bind(this)
    }
    
    togglePlayer = () => {
      const currentPlayer = (currentPlayer == "X") ? "O" : "X";
        console.log("currentPlayer", currentPlayer)
    this.setState({
      currentPlayer: currentPlayer,
    })}
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



export default Player;