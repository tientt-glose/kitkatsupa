import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Table, Input, Form, FormGroup, Label, Button } from 'reactstrap';
import Header from '../../container/Header';
import { Link, Redirect } from 'react-router-dom';
import * as axios from 'axios';

class DetailCourseForTeacher extends Component {

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
    //   "https://kitkat-api.herokuapp.com/api/users/" + localStorage.getItem("id"),
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
      `https://kitkat-api.herokuapp.com/api/courses/${this.props.location.state ? this.props.location.state.id : null}`,
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
                <CardHeader><Input type="text" value={this.state.course.title} /></CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Label sm={3}>教師：</Label>
                      <Col sm={9}>
                        <Input type="select">
                          <option>{this.state.course.teacher.fullname}</option>
                          <option>Kazuki Hirata</option>
                          <option>Tran Thi Thin</option>
                          <option>Tien Glose</option>
                        </Input>
                        {/* <Input type="text" value={this.state.course.teacher.fullname} /> */}
                      </Col>
                      {/* <Col sm={2}>
                        <Button color="primary" disabled={exam ? false : true}>提出</Button>
                      </Col> */}
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={3}>内容：</Label>
                      <Col sm={9}>
                        <Input type="textarea" value={this.state.course.description} />
                      </Col>
                    </FormGroup>
                    <div style={{ textAlign: "right" }}>
                      <Button color="primary">編集</Button>
                    </div>
                  </Form>
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

export default DetailCourseForTeacher;