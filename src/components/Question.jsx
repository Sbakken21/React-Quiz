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


    correctChoice(e){
        e.preventDefault();
        const {setCurrent, setScore} = this.props;
        setScore(this.props.score+1);
        setCurrent(this.props.current+1);
        // load function that shows message "Correct!" and loads a button to "go next"(setCurrent +1)
    }

    wrongChoice(e){
        e.preventDefault();
        const {setCurrent, setScore} = this.props;
        setCurrent(this.props.current+1);
    }

    render(){
        const {question} = this.props;

        function shuffle(choices) {
            let i = choices.length -1;
            for (; i > 0; i--) {
                const j = Math.floor(Math.random() * (i+1));
                const temp = choices[i];
                choices[i] = choices[j];
                choices[j] = temp;
            }
            return choices
        }

        const shuffledChoices = shuffle(this.props.question.choices);

        return(
            <div>
                <div className="question-title">
                    {question.question}
                </div>
                
                <ul className="divided list">
                    {
                        shuffledChoices.map((choice) => {
                            if (question.correct === choice) {
                                return(
                                    <li className="item"
                                        onClick= {this.correctChoice.bind(this)}>
                                        <a href="">{choice}</a>
                                    </li>
                                )
                            } else {
                                return(
                                    <li className="item"
                                        onClick= {this.wrongChoice.bind(this)}>
                                        <a href="">{choice}</a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Question