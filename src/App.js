import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Signin from './Signin/Signin';
import CouresListForStudent from './component/CouresListForStudent';
import CouresInfo from './component/CouresInfo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <CouresListForStudent />
            }} />

          <Route exact path = '/sign-in'
            render={(props) => {
              return <Signin />
            }} />

          <Route exact path='/sign-up'
            render={(props) => {
              return <Signup />
            }} />

<Route exact path='/CouresInfo'
            render={(props) => {
              return <CouresInfo />
            }} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
