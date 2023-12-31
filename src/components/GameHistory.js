import React from 'react';
import Board from './Board';
import {v4 as uuidv4} from 'uuid';


class GameHistory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            //default is the last move (won pattern)
            move:this.props.stepNumber
        }
    }
    handleClick = (move)=>{
        // console.log(`button ${move} has been clicked `)
        this.setState({
            move: move
        })

    }
    
    render(){

        const history = this.props.history;
        const current = history[this.state.move] //pass this.state.move to reflect the square pattern
        const squares =  current.squares.slice();

        // console.log("Winner from Game History" + this.props.winner)

        let status=""
        if(this.props.winner){
            status = "Winner: " + this.props.winner
        }else{
            status = "Draw"
        }

        // create button in to see the time travel, const stepNumbersArray = Array.from({ length: game.stepNumber }, (_, i) => i + 1);
        // console.log('history stepnumber' + this.props.stepNumber)
        const stepNumbersArray = Array.from({ length: this.props.stepNumber }, (_, i) => i + 1);
        // console.log("stepNumbersArray" + stepNumbersArray);
        return(
            <div>
                <h5>Round : {this.props.roundNumber} , {status}</h5>
                <Board 
                squares = {squares}
                onClick = {() => {}} 
                />           
                {stepNumbersArray.map((move) => {
                    const key= uuidv4();
        
                    return(<button key={key} onClick={() => this.handleClick(move)}>Go to move #{move}</button>)
                })}                
            </div>
        )
    }
}

export default GameHistory;