import * as axios from 'axios'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, Col, Form, FormGroup, Input, Row, Table } from 'reactstrap'
import Header from '../container/Header'

class LessonInfoForAchievement extends Component {

  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      lesson: {
        title: "Title",
        description: "Description",
        content: "Content",
      },
      answers: null
    }
  }

  async componentDidMount() {
    try {
      const lessonResponse = await axios.get(
        `https://kitkat-api.herokuapp.com/api/lessons/${this.props.location.state ? this.props.location.state.id : null}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
        }
      )
      const lesson = lessonResponse.data
      const examResponse = await axios.get(
        `https://kitkat-api.herokuapp.com/api/exams/${lesson.exam.id}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
        }
      )
      const exam = examResponse.data
      this.setState({ lesson })
      this.setState({ answers: exam.answers })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { lesson } = this.state
    const exam = lesson ? lesson.exam : null
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
                  <CardSubtitle>課題：{exam ? exam.title : 'ない'} </CardSubtitle>
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
                  {
                    !this.state.answers ? <p>Loading answers data...</p>
                      : (
                        <>
                          {
                            this.state.answers.length > 0 ? this.state.answers && this.state.answers.map((answer, index) => (
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{answer.student.username}</td>
                                <td>{answer.student.fullname}</td>
                                <td><a href={answer.content} rel="noopener noreferrer" target="_blank">Click here</a></td>
                                <td>
                                  <Form>
                                    <FormGroup row>
                                      <Col sm={3}>
                                        <Input type="select" value={answer.result}>
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
                                        <h3>{answer.result}/10</h3>
                                      </Col>
                                    </FormGroup>
                                  </Form>
                                </td>
                              </tr>
                            )) : <p>答えがまだありません。</p>
                          }
                        </>
                      )
                  }
                </tbody>
              </Table>
              <div style={{ textAlign: "right" }}>
                <Button color="primary">編集</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

}

export default LessonInfoForAchievement