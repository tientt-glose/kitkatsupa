  import React from 'react';
  import './Signup.css';
  import * as axios from 'axios';
  import Header from './component/Header';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      password_confirm: '',
      error: '',
      loading: false
    };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  async register(event) {
    event.preventDefault()
    this.setState({loading: true})
    try {
    const response = await axios.post('http://kitkat-api.herokuapp.com/auth/register', {
      username: this.state.username, // Dữ liệu được gửi lên endpoint 
      password: this.state.password,
      password_confirm: this.state.password_confirm,
      email: this.state.email,
      fullname: this.state.fullname,
    })
    console.log({data: response.data})
    } catch(err) {
      console.error({err})
      this.setState({error: err.response.data.message})
    }
    this.setState({loading: false})
   }


  render () {
    return (
     
      <div className="App">
        <Header />
        <div className="signup-form">
          <form>
            <h2>SignUp</h2>
            <p className="hint-text">Create your account. It's free and only takes a minute.</p>
            <div className="form-group">
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Name" required="required"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleChange}  placeholder="Fullname" ></input>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required="required"></input>
            </div>
            <div className="form-group"> 
                <input type="password" className="form-control" name="password_confirm" value={this.state.password_confirm} onChange={this.handleChange}  placeholder="Password_confirm" required="required"></input>
            </div>
            <div className="form-group">
                <button className="btn btn-success btn-lg btn-block" onClick={this.register}>SignUp Now</button>
            </div>
            {
              this.state.loading && <div class="loader"></div>
            }
            <p style={{color: 'red'}} >{this.state.error}</p>
          </form>
        </div>
      </div>
      
    )
    
  };
}
    
  export default Signup;
