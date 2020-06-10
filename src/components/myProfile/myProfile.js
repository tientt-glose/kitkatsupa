import React, { Component } from "react";

class myProfile extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { name, email, password } = this.state;
    console.log(this.state);

    return (
      <div className='container'>
        <div className='row' style={{ marginTop: "50px" }}>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='panel panel-primary'>
              <div className='panel-heading'>
                <h3 className='panel-title' style={{ textAlign: "center", fontSize: "25px",}}>私のプロフィール</h3>
              </div>
              <div className='panel-body'>
                <form onSubmit={this.onSubmit}>
                  <legend>プロフィール</legend>

                  <div className='form-group'>
                    <label for='name'>名前 :</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name="name"
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
                      name="email"
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
                      name="password"
                      value={password}
                      onChange={this.onChange}
                    />
                  </div>

                  <button type='submit' className='btn btn-primary' style={{ margin: "auto", display: "block"}}>
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

export default myProfile;
