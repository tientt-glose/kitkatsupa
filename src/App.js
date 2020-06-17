import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import CoursesListForStudent from './container/CoursesListForStudent';
import LessonInfo from './component/lessonInfo';
import LoginForm from './Signin/LoginForm';
import MyProfile from './component/myProfile/myProfile';
import DetailCourse from './component/detailCourse/detailCourse';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              return <CoursesListForStudent />
            }} />

          <Route exact path='/sign-in'
            render={(props) => {
              return <LoginForm />
            }} />

          <Route exact path='/sign-up'
            render={(props) => {
              return <Signup />
            }} />

          <Route exact path='/lessonInfo'
            render={(props) => {
              return <LessonInfo />
            }} />

          <Route exact path='/detailCourse'
            render={(props) => {
              return <DetailCourse />
            }} />

          <Route exact path='/profile'
            render={(props) => {
              return <MyProfile />
            }} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
