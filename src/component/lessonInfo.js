import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../container/Header';
import * as axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class LessonInfo extends Component {

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
                  <h3>{this.state.lesson.title}</h3>
                </CardHeader>
                <CardBody>
                  <CardSubtitle>教師：{this.props.location.state ? this.props.location.state.teacher.fullname : null} </CardSubtitle>
                  <CardText>内容：{this.state.lesson.description}</CardText>
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
                  <CardSubtitle>課題：{exam ? exam.title : 'ない'} </CardSubtitle>
                  <CardText>内容：<a href={exam ? exam.content : null}>{exam ? 'Click here' : 'ない'}</a></CardText>
                  <Form>
                    <FormGroup row>
                      <Label sm={3}>提出のリンク：</Label>
                      <Col sm={7}>
                        <Input type="text" placeholder={exam ? "リンクを貼り付けてください！" : null} disabled={exam ? false : true}/>
                      </Col>
                      <Col sm={2}>
                        <Button color="primary" disabled={exam ? false : true}>提出</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                  <CardText>点：-/-</CardText>
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

export default LessonInfo;