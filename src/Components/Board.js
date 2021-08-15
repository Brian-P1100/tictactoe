import React from 'react'
import Square from './Square'
import { Container, Row, Col } from 'reactstrap';

import React, { Component } from 'react'

class Board extends Component {
constructor(props) {
    super(props)

    this.state = {
        board: ["", "", "", "", "", "", "", "", "",]
    }
}


    render() {
        return (
          <div className="board">
              {this.state.board.map({Square}) => {
                return (<div onClick={() => this.state.Player(index)} className="square">{Square}</div>)
              })}
            </div>        
          
        );
      }
    

}

export default Board
                    
