import React from 'react';
import Square from './Square';

class Board extends React.Component {

    //before adding history of (Time Travel)

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     }
    // }

    // handleClick(i){
    //     console.log('handle click from board at the position of : ' + i)
    //     //handle click will display X or O 
    //     const squares = this.state.squares.slice();

    //     //if already have winner or square is already filled, ignore the click (so return to leave this handleClick function)
    //     if(calculateWinner(squares) || squares[i]){
    //         return;
    //     }

    //     //if the squares[i] has not filled yet, filled it
    //     squares[i] = this.state.xIsNext  ? 'X' : 'O';
    //     this.setState({squares: squares, xIsNext : !this.state.xIsNext});
    // }


    renderSquare(i) {
      return (
      <Square 
      value={this.props.squares[i]} 
      onClick={()=> this.props.onClick(i)}
      />);
    }
  
    render() {  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  

export default Board;