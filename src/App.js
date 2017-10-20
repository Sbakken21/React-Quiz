import React, { Component } from 'react';
import './App.css';
import data from './data/quiz';
import QuestionList from './components/QuestionList';
import Scorebox from './components/Scorebox';
import Results from './components/Results';
import { Container, Header } from 'semantic-ui-react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: data,
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
    this.setState({
      current
    });
  }

  setScore(score){
    this.setState({
      score
    });
  }

  render() {
    if(this.state.current > this.state.questions.length){
      var scorebox = '';
      var results = <Results {...this.state} />
    } else {
      var scorebox = <Scorebox {...this.state} />
      var results = '';
    }
    return (
      <div className="App">
        <Container>
          <header>
            <h1 className="title">Quiz App</h1>
          </header>
          <hr />
          <div className="scorebox">
            {scorebox}
          </div>
          <div className="questionlist">
            <QuestionList 
              {...this.state} 
              setCurrent={this.setCurrent.bind(this)}
              setScore={this.setScore.bind(this)}
            />
          </div>
          <div className="results">
            {results}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
