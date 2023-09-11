import React from 'react';
import Game from './Game';
import GameHistory from './GameHistory';

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
                    <GameHistory
                      id={index}
                      history={game.history}
                      stepNumber={game.stepNumber}
                      winner={game.winner}
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