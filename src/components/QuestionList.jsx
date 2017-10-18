import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
    render(){
        return(
            <div className="questions">
                {
                    this.props.questions.map(question => {
                        if(question.id === this.props.current){
                            return (
                                <Question
                                    question={question}
                                    key={this.props.current}
                                    {...this.props}
                                />
                            )
                        }
                    })
                }

            </div>
        )
    }
}

export default QuestionList