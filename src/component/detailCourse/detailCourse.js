import React, { Component } from "react";
import "./detailCourse.css";
import axios from 'axios';

class detailCourse extends Component {
  state = {
    nameCourse: "",
    nameTeacher: "",
    detail: "",
    isListCourse: false,
    total: 0,
    listCourses: [
      {
        id: 1,
        name: "a",
        point: 69,
      },
      {
        id: 2,
        name: "b",
        point: 70,
      },
      {
        id: 3,
        name: "c",
        point: 100,
      },
    ],
  };

  componentDidMount() {
    const { listCourses } = this.state;
    let total = 0;

    listCourses.forEach(listCourse => {
      total = total + listCourse.point;
    })

    this.setState({
      total: total
    });

    this.listenCourse();
  }

  async listenCourse() {
    await axios({
      method: 'GET',
      url: 'http://kitkat-api.herokuapp.com/api/courses/820346cf-232a-49dc-8c73-9e8354bef18a',
      body: null
    }).then(res => {
      console.log(res.data);
      const { title, description, teacher } = res.data;
      this.setState({
        nameCourse: title,
        detail: description,
        nameTeacher: teacher.fullname
      });
    }).catch(err => {
      console.log(err);
    })
  }

  showList = () => {
    this.setState({
      isListCourse: !this.state.isListCourse,
    });
  };

  showListCourse = listCourses => {
    let result = null;

    if( listCourses.length > 0) {
      result = listCourses.map((listCourse, index) => {
        return (
          <tr key={index}>
            <td>{listCourse.name}</td>
            <td>{listCourse.point}</td>
          </tr>
        );
      });
    }

    return result;
  };

  render() {
    const { nameCourse, nameTeacher, detail, isListCourse, listCourses, total } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <h1 className='text-center nameCourse'>コース名: {nameCourse}</h1>
          <p className='nameTeaCher'>教師: {nameTeacher}</p>
          <p className='detail'>まとめ内客: {detail}</p>
        </div>

        {/* <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='panel panel-primary'>
              <div className='panel-heading'>
                <button
                  type='button'
                  className='btn btn-success'
                  style={{ float: "right", position: "relative", top: "-8px" }}
                  onClick={this.showList}
                >
                  入学
                </button>
                <h3 className='panel-title'>レッスンのリスト</h3>
              </div>
              <div className='panel-body'>
                {isListCourse && (
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>レッスン名</th>
                        <th>点</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.showListCourse(listCourses)}
                        <tr>
                          <td></td>
                          <td>{total}</td>
                        </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default detailCourse;
