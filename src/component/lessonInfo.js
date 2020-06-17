import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText } from 'reactstrap';
import Header from '../container/Header';


class LessonInfo extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: 50 }}>

          <Row>
            <Col xs="6" sm="4">
              <Card outline color="primary">
                <CardHeader><h3><a href="/detailCourse">IT日本語</a> ~ Lesson 1</h3></CardHeader>
                <CardBody>
                  <CardSubtitle>教師：Kazuki Hirata </CardSubtitle>
                  {/* <CardText>内容：この授業では、日本で活躍できるエンジニアになるために、日本語を用いてJS言語と根本原因と報連相などのような学習を行います。</CardText> */}
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="8">
              <iframe width="1280" height="720" src="https://www.youtube.com/embed/x1ertSy-7dU?list=PLGc1xNh3VVUKn_VXYK52OjOb3RCx-W-qB" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            {/* <Col sm="4">.col-sm-4</Col> */}
          </Row>
        </div>
      </div>
    );
  }

}

export default LessonInfo;