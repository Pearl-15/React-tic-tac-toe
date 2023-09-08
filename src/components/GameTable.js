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
    }

    addRound = (game)=>{
        this.setState({
            gameTable:[...this.state.gameTable, game]
        })

        console.log('Next Round is activate')
    }




    render() {
        return (
          <div className="app-container">
            <div className="playgame">
              <Game addRound={this.addRound} />
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
                    />
                    <p>This is Round : {index + 1}</p>
                  </article>
                );
              })}
            </div>
          </div>
        );
      }
}

export default GameTable;