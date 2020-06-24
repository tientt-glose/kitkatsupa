import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import CoursesListForStudent from './container/CoursesListForStudent';
import LessonInfo from './component/lessonInfo';
import LessonInfoForTeacher from './component/lessonInfoForTeacher';
import LessonInfoForAchievement from './component/lessonInfoForAchievement';
import LoginForm from './Signin/LoginForm';
import MyProfile from './component/myProfile/myProfile';
import DetailCourse from './component/detailCourse/detailCourse';
import CoursesListForTeacher from './container/CoursesListForTeacher';
import DetailCourseForTeacher from './component/detailCourse/detailCourseForTeacher';
import DetailUser from './component/detailCourse/detailUser';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'
            render={(props) => {
              //role
              if (localStorage.getItem("role") === 'Teacher')
                return <CoursesListForTeacher />
              else return <CoursesListForStudent />
            }} />

          <Route exact path='/achievement'
            render={(props) => {
              if (localStorage.getItem("role") === 'Teacher')
                return <CoursesListForStudent />
              else return <Redirect to="/" />
            }} />

          <Route exact path='/achievement-course'
            render={(props) => {
              if (localStorage.getItem("role") === 'Teacher')
                return <DetailCourse {...props} />
              else return <Redirect to="/" />
            }} />

          <Route exact path='/achievement-course-lesson'
            render={(props) => {
              if (localStorage.getItem("role") === 'Teacher')
                return <LessonInfoForAchievement {...props} />
              else return <Redirect to="/" />
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
              if (localStorage.getItem("role") === 'Teacher')
                return <LessonInfoForTeacher {...props} />
              return <LessonInfo {...props} />
            }} />

          <Route exact path='/course-detail'
            render={(props) => {
              //role
              if (localStorage.getItem("role") === 'Teacher')
                return <DetailCourseForTeacher {...props} />
              else return <DetailCourse {...props} />
            }} />

          <Route exact path='/profile'
            render={(props) => {
              return <MyProfile />
            }} />

          <Route exact path='/users-list'
            render={(props) => {
              if (localStorage.getItem("role") === 'Admin')
                return <DetailUser />
              else return <Redirect to="/" />
            }} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
