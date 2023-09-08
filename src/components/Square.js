import React from 'react';

class Square extends React.Component {

    render() {
      return (

        //function form onClick props 
        <button className="square" onClick={()=> this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }

export default Square;