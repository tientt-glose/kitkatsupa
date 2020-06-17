import React from 'react';
import * as axios from 'axios';
import { Form } from 'reactstrap';
import Header from '../container/Header';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		let loggedIn = true
		const Token = localStorage.getItem("token")
		if (Token === null) {
			loggedIn = false
		}
		this.state = {
			username: '',
			password: '',
			loggedIn,
			buttonDisabled: false,
			loading: false,
			error: '',
		}
		this.login = this.login.bind(this);
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
	async login(event) {
		this.setState({
			error: '',
			buttonDisabled: true
		})
		event.preventDefault();
		this.setState({ loading: true })

		try {
			const response = await axios.post('http://kitkat-api.herokuapp.com/auth/login', {
				username: this.state.username, // Dữ liệu được gửi lên endpoint 
				password: this.state.password,
			})
			console.log({ data: response.data })
			localStorage.setItem("token", response.data.token)
			localStorage.setItem("id", response.data.id)
			localStorage.setItem("username", response.data.username)
			this.setState({
				loggedIn: true
			})
		} catch (err) {
			console.error({ err })
			this.setState({ error: err.response.data.message })
		}
		this.setState({
			loading: false,
			buttonDisabled: false
		})
	}

	render() {
		if (this.state.loggedIn) {
			return <Redirect to="/" />
		}
		return (
			<div className="App">
				<Header />
				<div className="signup-form">
					<Form>
						<h2>ログイン</h2>
						<div className="form-group">
							<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="ユーザー名" required="required"></input>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="パスワード" required="required"></input>
						</div>
						<Link to={`/`}>
							<div className="form-group">
								<button
									className='btn btn-success btn-lg btn-block'
									disabled={this.state.buttonDisabled}
									onClick={this.login}
								>
									ログイン
							</button>
							</div>
						</Link>
						<p className="loginhere">アカウントを持っていませんか?
                			<a href="/sign-up" className="loginhere-link">ここでサインアップ</a>
						</p>
						{
							this.state.loading && <div className="loader"  ></div>
						}
						<p style={{ color: 'red' }} >{this.state.error}</p>
					</Form>
				</div>
			</div>
		);
	}
}
export default LoginForm;
