import React from 'react';
import Game from './Game';
import GameHistory from './GameHistory';
import {v4 as uuidv4} from 'uuid';
import GameHistoryTable from './GameHistoryTable';
import Axios from 'axios';

class GameTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            gameTable:[],
            gameNumber:0,
            isPlay: true
        }
    }



    addRound = (game)=>{
        this.setState((prevState)=> ({
            gameTable:[...prevState.gameTable, game]          
  
        }));
        console.log('Next Round is activate')
   
    }

    endGame = (game)=>{

      const gameNo = (this.state.gameNumber) + 1
      console.log("Game Number " + gameNo)
      console.log(this.state.gameTable)

      const lastGame =  [...this.state.gameTable, game];
      
      Axios.post("http://localhost:3000/games",{
            gameTable: lastGame,
            gameNumber: gameNo
        })
        .then( res =>{
            console.log("End Game ")
            console.log("Response Data back from API")
            console.log(res.data)
        })

        this.setState({
            gameTable:[],
            gameNumber:gameNo
        });
    }

  

    reviewGameHistory = ((gameId)=> {
      console.log("review game history " + gameId)

      //retrieve from API based on gameId 
      fetch("http://localhost:3000/games/"+gameId)
      .then( response => response.json())
      .then(data =>{
         console.log(data["gameTable"])

          this.setState({
          gameTable: data["gameTable"],
          isPlay: false
      })
      } )
    })

    playNewGame = ()=>{
      this.setState({
        gameTable: [],
        isPlay: true
      })
    }

  //   async componentDidMount(){
  //     //call API to retrieve total game number,
  //     try{
  //         const response = await fetch("http://localhost:3000/games")
  //         const data = await response.json();
  //         console.log("Game Table ComponentDidMount")
  //         console.log("Game Table Game Number" +  data.length);
  //         this.setState({
  //             gameNumber: data.length
  //         })
  //     }catch(err){
  //         console.log(err);
  //     }
  // }

  componentDidMount() {
    // Call API to retrieve total game number
    fetch("http://localhost:3000/games")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Game Table ComponentDidMount");
        console.log("Game Table Game Number" + data.length);
        this.setState({
          gameNumber: data.length,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

  componentDidUpdate(){
    console.log("Game Table ComponentDidUpdate")
    console.log(this.state);
  }

    render() {
        return (
          <div className="app-container">
            <div className="playgame">

            {this.state.isPlay  ?  <Game addRound={this.addRound} endGame={this.endGame}/> : (<button onClick={this.playNewGame}>Play New Game</button>)}
             
            </div>
            <div className="gamehistory">
              {/* <h5>Game Number : {this.state.gameNumber+1} </h5> */}
                
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
            <GameHistoryTable gameTable={this.state.gameTable} gameNumber={this.state.gameNumber} review={this.reviewGameHistory}/>
          </div>
        );
      }
}

export default GameTable;