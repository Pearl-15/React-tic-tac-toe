import React from 'react';
import {v4 as uuidv4} from 'uuid';

class GameHistoryTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            gameNumber: this.props.gameNumber,
            gameTable: this.props.gameTable
        }
    }

    handleClick(gameId) {
        // console.log('Clicked on game number ' + gameId )
        this.props.review(gameId)
    }

    //call API for the first render to display existing Game Number

    // async componentDidMount(){
    //     // console.log("Game History Table ComponentDidMount")

    //     try{
    //         const response = await fetch("http://localhost:3000/games")
    //         const data = await response.json();
    //         // console.log("Game History Table ComponentDidUpdate ")
    //         // console.log(data.length);
    //         this.setState({
    //             gameNumber: data.length
    //         })
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    //////////////##### Still Checking need or not - Start ##########//////////////
    // componentDidMount(){
    //     // console.log("Game History Table ComponentDidMount")

    //     fetch("http://localhost:3000/games")
    //     .then((response) => {
    //         if (!response.ok){
    //             throw new Error("Network response was not ok")
    //         }
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         this.setState({
    //             gameNumber: data.length
    //         });
    //     })
    //     .catch((error)=>{
    //         console.error(error);
    //     })                 
    // }
    //////////////##### Still Checking need or not - End ##########//////////////

    // //to update display Number of Games Played Button,
    // //if Game Table has updated property, it will set back the lastest property and re render again 
    // async componentDidUpdate(prevProps,prevState){
      
    //     if(this.props.gameNumber !== prevProps.gameNumber){

    //         this.setState({
    //             gameNumber: this.props.gameNumber,
    //             gameTable: this.props.gameTable 
    //         })

    //     }
       
    // }

    //to update display Number of Games Played Button,
    //if Game Table has updated property, it will set back the lastest property and re render again 
    componentDidUpdate(prevProps,prevState){
      
        if(this.props.gameNumber !== prevProps.gameNumber){

            this.setState({
                gameNumber: this.props.gameNumber,
                gameTable: this.props.gameTable 
            })

        }
       
    }

    render(){
     
        // console.log("Game History Render")
        
        const stepNumbersArray = Array.from({ length: this.state.gameNumber }, (_, i) => i + 1);
   
        // console.log('Game History step number' + stepNumbersArray.length)
        return(
        <div>
            <h5>Number of Games Played</h5>
           
            {stepNumbersArray.map((i, index)=>{
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