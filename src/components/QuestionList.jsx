import React, { Component } from 'react';
import Question from './Question';
import { Container } from 'semantic-ui-react';

class QuestionList extends Component {
    render(){
        return(
            <div className="questions">
                <Container>
                    {
                        this.props.questions
                            .filter(question => question.id === this.props.current)
                            .map((question) => {
                                return (
                                    <Question
                                        question={question}
                                        key={this.props.current}
                                        {...this.props}
                                    />
                                )
                            })
                    }
                </Container>

            </div>
        )
    }
}

export default QuestionList