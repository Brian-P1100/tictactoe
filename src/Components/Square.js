import React, { Component } from 'react'
import { Card, CardText, CardBody } from 'reactstrap'
import Player from './Player'
class Square extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Player
             
        }
        this.squareClicked = this.squareClicked.bind(this)
  }


squareClicked(index) {
  let player_turn = this.state.player_turn
  let board = this.state.board
    }
    
    render() {
        return (
            <div>
                <Card size='sm' text='white' color='#36739B'>
                    <CardBody class="card-body" />
                </Card>
            </div>
        )
    }
}

export default Square;
            
                    
                    
                    
            
