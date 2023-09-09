import React from 'react';
import Game from './Game';
import RoundHistory from './RoundHistory';

class GameTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            gameTable:[]
        }
        this.addRound = this.addRound.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    addRound = (game)=>{
        this.setState({
            gameTable:[...this.state.gameTable, game]
        });
        console.log('Next Round is activate')
    }

    endGame = ()=>{
        this.setState({
            gameTable:[]
        });
    }

    render() {
        return (
          <div className="app-container">
            <div className="playgame">
              <Game addRound={this.addRound} endGame={this.endGame}/>
            </div>
            <div className="gamehistory">
                
              {this.state.gameTable.map((game, index) => {
                
                return (
                  <article key={index}>
                    <RoundHistory
                      id={index}
                      history={game.history}
                      stepNumber={game.stepNumber}
                      xIsNext={game.xIsNext}
                      roundNumber={index+1}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        );
      }
}

export default GameTable;