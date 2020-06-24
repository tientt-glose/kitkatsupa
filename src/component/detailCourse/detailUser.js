import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardSubtitle, CardText, Table } from 'reactstrap';
import Header from '../../container/Header';
import { Link, Redirect } from 'react-router-dom';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { IconContext } from "react-icons";
import * as axios from 'axios';

class DetailUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get(
      `https://kitkat-api.herokuapp.com/api/users`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      }
    )
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />
    }
    if (this.state.users != null) {
      console.log(this.state.users)
      var users_list = this.state.users.map((user, id) => (
        <tr>
          <th scope="row">{id + 1}</th>
          <td>{user.username}</td>
          <td>{user.fullname}</td>
          <td>{user.email}</td>
          <td>
            <div>
              <IconContext.Provider value={{ color: "red", size: "2em" }}>
                <div>
                  <RiDeleteBin2Line />
                </div>
              </IconContext.Provider>
            </div>
          </td>
        </tr>
      ))
    }
    return (
      <div>
        <Header />
        <div style={{ margin: 50 }}>
          <Row>
            <Col xs="6" sm="4">
              <Card outline color="primary">
                <CardHeader><h3>ユーザ管理</h3></CardHeader>
                {/* <CardBody>
                  <CardSubtitle>教師s：{this.state.course.teacher.fullname} </CardSubtitle>
                  <CardText>内容：{this.state.course.description}</CardText>
                </CardBody> */}
              </Card>
            </Col>
            <Col xs="12" sm="8">
              <h2>ユーザリスト</h2>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ユーザ名</th>
                    <th>フルネーム</th>
                    <th>メール</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {users_list}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default DetailUser;