import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/quiz';
import QuestionList from './components/QuestionList';
import Scorebox from './components/Scorebox';
import Results from './components/Results';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {scorebox}

        <QuestionList 
          {...this.state} 
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)}
        />
        {results}
      </div>
    );
  }
}

export default App;
