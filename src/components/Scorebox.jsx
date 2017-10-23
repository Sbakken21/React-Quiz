import React, { Component } from 'react';

class Scorebox extends Component {
    render(){
        return(
            <div className="score">
                Question {this.props.current} out of {this.props.questions.length}
                <span className="stuff"> Score: {this.props.score}</span>
            </div>
        );
    }
}

export default Scorebox