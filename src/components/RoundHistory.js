import React from 'react';
import Board from './Board';

class RoundHistory extends React.Component{

    
    render(){

        const history = this.props.history;
        const winpattern = history[this.props.stepNumber]
        const squares =  winpattern.squares.slice();
        console.log('LAST SQUARE' + squares);

        return(
            <div>
                <h1>Winner : {this.props.xIsNext ? 'O' : 'X'} </h1>
                <p>Round : </p>
                <p>stepNumber={this.props.stepNumber}</p>
                <Board 
                squares = {squares}
                />
            </div>
        )
    }
}

export default RoundHistory;