import React from 'react';
import Game from './Game';

class GameTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            gameTable:[]
        }
    }
    render(){
        return(
        <div>
            <h1> Game Table</h1>
            <Game />
        </div>)
    }
}

export default GameTable;