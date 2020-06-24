import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import Header from '../container/Header';
import * as axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class LessonInfoForAchievement extends Component {

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
                      pathname: "/achievement-course",
                      state: { id: this.props.location.state ? this.props.location.state.courseId : null }
                    }}
                  >
                    <h3>Back to course</h3>
                  </Link>
                  <h3>{this.state.lesson.title}</h3>
                </CardHeader>
                <CardBody>
                  <CardSubtitle>教師：{this.props.location.state ? this.props.location.state.teacher.fullname : null} </CardSubtitle>
                  <CardText>内容：{this.state.lesson.description}</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="8">
              <Card outline color="primary">
                <CardHeader>
                  <h3>宿題</h3>
                </CardHeader>
                <CardBody>
                  <CardSubtitle>課題s：{exam ? exam.title : 'ない'} </CardSubtitle>
                  <CardText>内容：<a href={exam ? exam.content : null}>{exam ? 'Click here' : 'ない'}</a></CardText>
                </CardBody>
              </Card>

              <Table striped style={{ marginTop: 25 }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ユーザ名</th>
                    <th>フルネーム</th>
                    <th>リンク</th>
                    <th>点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>users</td>
                    <td>Nguyen Manh Tien</td>
                    <td><a href={`https://bit.ly/2Z84wkH`}>Click here</a></td>
                    <td>
                      <Form>
                        <FormGroup row>
                          <Col sm={3}>
                            <Input type="select" value={Math.floor(Math.random() * 11)}>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </Input>
                          </Col>
                          <Col sm={2}>
                            <h3>/10</h3>
                          </Col>
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>tuan33</td>
                    <td>Manh Tuan</td>
                    <td><a href={`https://bit.ly/37Wvb80`}>Click here</a></td>
                    <td>
                      <Form>
                        <FormGroup row>
                          <Col sm={3}>
                            <Input type="select" value={Math.floor(Math.random() * 11)}>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </Input>
                          </Col>
                          <Col sm={2}>
                            <h3>/10</h3>
                          </Col>
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>tunv123</td>
                    <td>Tu Nguyen</td>
                    <td><a href={`https://bit.ly/3fSiPAp`}>Click here</a></td>
                    <td>
                      <Form>
                        <FormGroup row>
                          <Col sm={3}>
                            <Input type="select" value={Math.floor(Math.random() * 11)}>
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </Input>
                          </Col>
                          <Col sm={2}>
                            <h3>/10</h3>
                          </Col>
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div style={{ textAlign: "right" }}>
                <Button color="primary">編集</Button>
              </div>
            </Col>
            {/* <Col sm="4">.col-sm-4</Col> */}
          </Row>
        </div>
      </div>
    );
  }

}

export default LessonInfoForAchievement;