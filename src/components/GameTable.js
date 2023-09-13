import React from 'react';
import Game from './Game';
import GameHistory from './GameHistory';
import {v4 as uuidv4} from 'uuid';

class GameTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            gameTable:[]
        }
    }



    addRound = (game)=>{
        this.setState({
            gameTable:[...this.state.gameTable, game]
        });
        console.log('Next Round is activate')
        console.log(this.state);
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
                const key = uuidv4();
                return (
                  <article key={key}>
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