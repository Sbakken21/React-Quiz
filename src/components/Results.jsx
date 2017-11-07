import React, {Component} from 'react';

class Results extends Component {
    render(){
        let percent = (this.props.score / this.props.questions.length * 100).toFixed(2);
        if(percent > 80){
            let message = 'Good Job!';
        } else if(percent < 80 && percent > 60){
            let message = 'Not Bad';
        } else {
            let message = 'Try Again';
        }
        return(
            <div>
                <h4>You got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}% - {message}</h1>
                <hr/>
                <a href="/app">Retake</a>
            </div>
        );
    }
}

export default Results