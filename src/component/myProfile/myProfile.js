import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class myProfile extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  async onSubmit(event) {
    const { name, email, password } = this.state;
    event.preventDefault();
    await axios({
      method: "PUT",
      url:
        "http://kitkat-api.herokuapp.com/api/users/87d8fff2-d5ae-4958-96e7-8f03a1f58cf6",
      body: {
        username: name,
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <div className='container'>
        <div className='row' style={{ marginTop: "50px" }}>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='panel panel-primary'>
              <div className='panel-heading'>
                <h3
                  className='panel-title'
                  style={{ textAlign: "center", fontSize: "25px" }}
                >
                  私のプロフィール
                </h3>
              </div>
              <div className='panel-body'>
                <form>
                  <legend>プロフィール</legend>

                  <div className='form-group'>
                    <label for='name'>名前 :</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label for='email'>メール :</label>
                    <input
                      type='text'
                      className='form-control'
                      id='email'
                      name='email'
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className='form-group'>
                    <label for='password'>パスワード :</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      name='password'
                      value={password}
                      onChange={this.onChange}
                    />
                  </div>

                  <button
                    type='submit'
                    className='btn btn-primary'
                    style={{ margin: "auto", display: "block" }}
                    onClick={this.onSubmit}
                  >
                    修復
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(myProfile);
