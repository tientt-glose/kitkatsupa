import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../container/Header';
import * as axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class LessonInfoForTeacher extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      lesson: {
        title: "Title",
        description: "Description",
        content: "Content",
      }
    };
  }

  componentDidMount() {
    console.log({ state: this.props.location.state })
    axios.get(
      `https://kitkat-api.herokuapp.com/api/lessons/${this.props.location.state ? this.props.location.state.id : null}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
    )
      .then(response => {
        this.setState({ lesson: response.data });
        console.log(this.state.lesson.exam.title)
      })
      .catch(err => console.log(err));
  }

  render() {
    const { lesson } = this.state;
    const exam = lesson ? lesson.exam : null;
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
                <CardHeader>
                  <Link
                    to={{
                      pathname: "/course-detail",
                      state: { id: this.props.location.state ? this.props.location.state.courseId : null }
                    }}
                  >
                    <h3>Back to course</h3>
                  </Link>
                  <Input type="text" value={this.state.lesson.title} />
                </CardHeader>
                <CardBody>
                <Form>
                    <FormGroup row>
                      <Label sm={3}>教師：</Label>
                      <Col sm={9}>
                        <Input type="select">
                          <option>{this.props.location.state ? this.props.location.state.teacher.fullname : null}</option>
                          <option>Kazuki Hirata</option>
                          <option>Tran Thi Thin</option>
                          <option>Tien Glose</option>
                        </Input>
                        {/* <Input type="text" value={this.state.course.teacher.fullname} /> */}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={3}>内容：</Label>
                      <Col sm={9}>
                        <Input type="textarea" value={this.state.lesson.description} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={3}>動画：</Label>
                      <Col sm={9}>
                        <Input type="text" placeholder="新しいリンクを入力してください！"/>
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
              <div style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: this.state.lesson.content.replace(/(<? *script)/gi, 'illegalscript') }} >
              </div>
              <Card outline color="primary" style={{ margin: 50 }}>
                <CardHeader>
                  <h3>宿題</h3>
                </CardHeader>
                <CardBody>
                <Form>
                    <FormGroup row>
                      <Label sm={3}>課題：</Label>
                      <Col sm={9}>
                        <Input type="text" value={exam ? exam.title : null} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={3}>内容：</Label>
                      <Col sm={9}>
                        <Input type="text" value={exam ? exam.content : null} />
                      </Col>
                    </FormGroup>
                    <div style={{ textAlign: "right" }}>
                      <Button color="primary">編集</Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            {/* <Col sm="4">.col-sm-4</Col> */}
          </Row>
        </div>
      </div>
    );
  }

}

export default LessonInfoForTeacher;