import React, { Component } from "react";
import "./detailCourse.css";

class detailCourse extends Component {
  state = {
    nameCourse: "日本語",
    nameTeacher: "Ngô Đức Trung",
    detail: "満点",
    isListCourse: false,
    total: 0,
    listCourses: [
      {
        id: 1,
        name: "ごい",
        point: 69,
      },
      {
        id: 2,
        name: "文法",
        point: 70,
      },
      {
        id: 3,
        name: "読解",
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

        <div className='row'>
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
                          <td>Total</td>
                          <td>{total}</td>
                        </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default detailCourse;
