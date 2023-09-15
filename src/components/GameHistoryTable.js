import React from 'react';
import {v4 as uuidv4} from 'uuid';

class GameHistoryTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            gameNumber: this.props.gameNumber,
        }
    }

    handleClick(gameId) {
        // console.log('Clicked on game number ' + gameId )
        this.props.review(gameId)
    }

    
    //to update display Number of Games Played Button,
    //if Game Table has updated property, it will set back the lastest property and re render again 
    componentDidUpdate(prevProps,prevState){    
      
        if(this.props.gameNumber !== prevProps.gameNumber){
            this.setState({
                gameNumber: this.props.gameNumber,
            })

        }
       
    }

    render(){
             
        const gameNumbers = Array.from({ length: this.state.gameNumber }, (_, i) => i + 1);

        return(
        <div>
            <h5>Number of Games Played</h5>
           
            {gameNumbers.map((i, index)=>{
                const key = uuidv4();
                return(
                    <ul key={key}>
                        <button onClick={()=>this.handleClick(i)}>Game Number {index+1}</button>
                    </ul>
                )
            })}            
        </div>)
    }
}

export default GameHistoryTable;