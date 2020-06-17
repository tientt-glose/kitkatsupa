  import React from 'react';
  import './Signup.css';
  import * as axios from 'axios';
  import Header from './component/Header';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      Success: false,
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
    this.setState({error: ''})// Ẩn thông báo lỗi
    this.setState({Success: false})
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
    console.log({data: response.data});
    this.setState({Success: true})

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
            <h2>サインアップ</h2>
            <p className="hint-text">アカウントを作成。無料で、わずか1分で完了します。</p>
            <div className="form-group">
                <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="ユーザー名" required="required"></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleChange}  placeholder="フルネーム" ></input>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} placeholder="メールアドレス"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="パスワード" required="required"></input>
            </div>
            <div className="form-group"> 
                <input type="password" className="form-control" name="password_confirm" value={this.state.password_confirm} onChange={this.handleChange}  placeholder="パスワード確認" required="required"></input>
            </div>
            <div className="form-group">
                <button className="btn btn-success btn-lg btn-block" onClick={this.register}>サインアップ</button>
            </div>
            <p className="loginhere">すでにアカウントをお持ちですか？ 
                <a href="#" className="loginhere-link">ここでログイン</a>
            </p>
           
            {
              this.state.loading && <div class="loader"  ></div>
            }
            {
              this.state.Success && <div class="success"  >成功</div>
            }
           
            <p style={{color: 'red'}} >{this.state.error}</p>

          </form>
        </div>
      </div>
      
    )
    
  };
}
    
  export default Signup;
