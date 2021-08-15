import React, { Component } from 'react';
import Card from './Card'
import Board from './Board';
import Player from './Player';
import Square from './Square';


class Main extends Component {



render() {
    return (
        <div>
            <Board> 
                <Square />
            </Board>
        </div>
        )
    }
}



export default Main;
