import React from 'react';

class GameHistoryTable extends React.Component{

    handleClick(gameId) {
        // console.log('Clicked on game number ' + gameId )
        this.props.review(gameId)
    }

    render(){
             
        return(
        <div>
            <h5>Number of Games Played</h5>
           
            {this.props.gameTables.map((item, index)=>{
                return(
                    <ul key={item.id}>
                        <button onClick={()=>this.handleClick(item.id)}>Game Number {item.id}</button>
                    </ul>
                )
            })}            
        </div>)
    }
}

export default GameHistoryTable;