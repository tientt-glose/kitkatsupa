import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Table } from 'reactstrap';
import Header from '../../container/Header';
import { Link, Redirect} from 'react-router-dom';
import * as axios from 'axios';

class DetailCourse extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      course: {
        title: "Title",
        description: "Description",
        teacher: {
          fullname: "Teacher's fullname"
        },
        lessons: [

        ]
      }
    };
  }

  componentDidMount() {
    // axios.get(
    //   "http://kitkat-api.herokuapp.com/api/users/" + localStorage.getItem("id"),
    //   {
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem("token")}`
    //     },
    //   }
    // )
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       name: res.data.fullname,
    //       email: res.data.email
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios.get(
      `http://kitkat-api.herokuapp.com/api/courses/${this.props.location.state ? this.props.location.state.id : null}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
    )
      .then(response => {
        this.setState({ course: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!localStorage.getItem("token") || !this.props.location.state) {
			return <Redirect to="/" />
		}
    return (
      <div>
        <Header />
        <div style={{ margin: 50 }}>
          <Row>
            <Col xs="6" sm="4">
              <Card outline color="primary">
                <CardHeader><h3>{this.state.course.title}</h3></CardHeader>
                <CardBody>
                  <CardSubtitle>教師：{this.state.course.teacher.fullname} </CardSubtitle>
                  <CardText>内容：{this.state.course.description}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="8">
              <h2>レッスンリスト</h2>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>レッスン名</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.course.lessons.map((lesson, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <Link
                          to={{
                            pathname: "/lesson-detail",
                            state: { id: lesson.id, teacher: { fullname: this.state.course.teacher.fullname }, courseId: this.state.course.id }
                          }}
                        ><td>{lesson.title}</td></Link>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default DetailCourse;