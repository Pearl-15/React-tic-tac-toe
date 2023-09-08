import React from 'react';
import Board from './Board';
import calculateWinner from './Utils';

class RoundHistory extends React.Component{

    
    render(){

        const history = this.props.history;
        const winpattern = history[this.props.stepNumber]
        const squares =  winpattern.squares.slice();

        const winner = calculateWinner(squares)
        let status=""
        if(winner){
            status = "Winner: " + winner
        }else{
            status = "Draw"
        }

        return(
            <div>
                <h5>Round : {this.props.roundNumber} , {status}</h5>
                <Board 
                squares = {squares}
                onClick = {() => {}}
                />
            </div>
        )
    }
}

export default RoundHistory;