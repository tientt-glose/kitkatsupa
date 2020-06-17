import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Table } from 'reactstrap';
import Header from '../../container/Header';
import { Link } from 'react-router-dom';

class DetailCourse extends Component {

  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: 50 }}>

          <Row>
            <Col xs="6" sm="4">
              <Card outline color="primary">
                <CardHeader><h3>IT日本語</h3></CardHeader>
                <CardBody>
                  <CardSubtitle>教師：Kazuki Hirata </CardSubtitle>
                  <CardText>内容：この授業では、日本で活躍できるエンジニアになるために、日本語を用いてJS言語と根本原因と報連相などのような学習を行います。</CardText>
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
                    {/* <th>Last Name</th>
                    <th>Username</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <Link to={`/lessonInfo`}><td>Lesson 1</td></Link>
                    {/* <td>Otto</td>
                    <td>@mdo</td> */}
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Lesson 2</td>
                    {/* <td>Thornton</td>
                    <td>@fat</td> */}
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lesson 3</td>
                    {/* <td>the Bird</td>
                    <td>@twitter</td> */}
                  </tr>
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