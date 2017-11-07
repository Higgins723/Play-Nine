import React, { Component } from 'react';
import { range } from 'lodash';
import './App.css';
import './bootstrap/bootstrap.css';
import './font-awesome-4.7.0/css/font-awesome.css';


const Stars = (props) => {
  // This will give numberOfStars a random number from 1 to 9
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  return (
    <div className="col-md-5">
      {range(numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-md-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-md-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i}>{number}</span>
      )}
    </div>
  );
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}>{number}</span>
        )}
      </div>
    </div>
  );
}
Numbers.list = range(1, 10);

class Game extends Component {
  state = {
    selectedNumbers: [],
  };

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers}/>
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
