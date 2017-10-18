import React, {Component} from 'react';

class Results extends Component {
    render(){
        let percent = (this.props.score / this.props.questions.length * 100);
        if(percent > 80){
            var message = 'Good Job!';
        } else if(percent < 80 && percent > 60){
            var message = 'Not Bad';
        } else {
            var message = 'Try Again';
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