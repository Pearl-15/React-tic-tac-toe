import React from 'react';
import Board from './Board';
import calculateWinner from './Utils';
import {v4 as uuidv4} from 'uuid';
// import Axios from 'axios';

class Game extends React.Component {

    //After adding time travel
    constructor(props){
        super(props);
        this.state = {
            history:[{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            winner:''
        }
    }

    handleClick(i){

        //handle click will display X or O 
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice();

        //if already have winner or square is already filled, ignore the click (so return to leave this handleClick function)
        if(calculateWinner(squares) || squares[i]){
            return;
        }

        //if the squares[i] has not filled yet, fill it
        squares[i] = this.state.xIsNext  ? 'X' : 'O';

    
        let winner = calculateWinner(squares);
        // console.log("Winner " + winner)


        this.setState(
            {
                history: history.concat([{
                    squares: squares
                }]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext,
                winner: winner

            });
    }

    jumpTo(step){
        this.setState(
            {
                stepNumber: step,
                xIsNext : (step % 2) === 0,
            }
        )
    }

    handleNextRoundClick = ()=>{
        console.log('Next Round Start')
        this.props.addRound(this.state);
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares =  current.squares.slice();
        let winner = calculateWinner(squares);
        // console.log("Winner " + winner)

        let isX;
        if(winner){
            isX = winner === 'X'? true : false
        }else{
            isX = this.state.xIsNext
        }

      
        this.setState({
            history:[{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: isX,
            winner: ''
        })
    }

    handleEndGameClick = (e)=>{

        e.preventDefault();
        this.props.endGame(this.state);
        this.setState({
            history:[{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            winner:''
        })
    }



    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares =  current.squares.slice();
   
        const moves = history.map((step,move)=>{
            // const desc = move ? 'Go to move #' + move : 'Go to game start';
            const key = uuidv4();
            if(move === 0){
                return null;
            }
            const desc = 'Go to move #'+ move ;
            return(              
                <li key={key}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        //find Winner to change the status , Winner or Next player
        const winner = calculateWinner(current.squares);
        let status;
        if(winner){
        status = 'Winner: ' + winner;
        }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    

      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {current.squares}
            onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            {this.state.stepNumber === squares.length || calculateWinner(squares) ? 
            (<>
            <button onClick={this.handleNextRoundClick}>Next Round</button>
            <button onClick={this.handleEndGameClick}>End Game</button>
            </>)  : null}
          </div>
        </div>
      );
    }
  }
  
export default Game;