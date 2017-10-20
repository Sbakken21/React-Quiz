import React, { Component } from 'react';

class Question extends Component{
    onChange(e){
        e.preventDefault();
        const {setCurrent, setScore, question} = this.props;

        let selected = e.target.value;

        if(selected === question.correct){
            setScore(this.props.score+1);
        }

        setCurrent(this.props.current+1);
    }
    render(){
        const {question} = this.props;
        return(
            <div>
                <div className="question-title">
                    {question.question}
                </div>
                
                <ul className="list">
                    {
                        this.props.question.choices.map((choice) => {
                            return(
                                <li className="list-group-item">
                                    <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice} />{choice}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Question