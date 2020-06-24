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

          <Route exact path='/auth/sign-in'
            render={(props) => {
              return <LoginForm />
            }} />

          <Route exact path='/auth/sign-up'
            render={(props) => {
              return <Signup />
            }} />

          <Route exact path='/lesson-detail'
            render={(props) => {
              return <LessonInfo {...props} />
            }} />

          <Route exact path='/course-detail'
            render={(props) => {
              return <DetailCourse {...props} />
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
