import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import CouresListForStudent from './component/CouresListForStudent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <CouresListForStudent />
            }} />

          <Route exact path='/sign-up'
            render={(props) => {
              return <Signup />
            }} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
