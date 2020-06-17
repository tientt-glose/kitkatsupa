import React from 'react';
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import UserStore from './UserStore';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			buttonDisabled: false,
			loading: false,
			error: '',
			
		}
	}
	setInputValue(property, val) {
		val = val.trim();
		if (val.length > 12) {
			return;
		}
		this.setState({
			[property]: val
		})
	}
	resetForm() {
		this.setState({
			username: '',
			password: '',
			buttonDisabled: false

		})
	}
	// async doLogin() {
	// 	if (!this.state.username) {
	// 		return;
	// 	}
	// 	if (!this.state.password) {
	// 		return;
	// 	}
	// 	this.setState({
	// 		buttonDisabled: true
	// 	})
	// 	try {
	// 		let res = await fetch('/login', {
	// 			metod: 'post',
	// 			headers: {
	// 				'Accept': 'application/json',
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringifly({
	// 				username: this.state.username,
	// 				password: this.state.password
	// 			})
	// 		}
	// 		);

	// 		let result = await res.json();
	// 		if (result && result.success) {
	// 			UserStore.isLoggedIn = true;
	// 			UserStore.username = result.username;
	// 		}

	// 		else if (result && result.success === false) {
	// 			this.resetForm();
	// 			alert(result.msg);
	// 		}
	// 	}

	// 	catch (e) {
	// 		console.log(e);
	// 		this.resetForm();
	// 	}
	// }

	async login(event) {
		// event.preventDefault();
		this.setState({ loading: true })
		const response = await axios.post('http://kitkat-api.herokuapp.com/auth/login', {
			username: this.state.username, // Dữ liệu được gửi lên endpoint 
			password: this.state.password,
		}).then(res => {
			this.setState({ loading: false })
			this.props.history.push('/');
		}).catch(err => {
			console.error({ err })
			this.setState({ error: err.response.data.message });
			this.setState({ loading: false })

		});
	}

	render() {
		return (
			<div className="loginForm">
				<h4 >* ログイン	</h4>
				<InputField
					type='text'
					placeholder='ユーザー名	'
					value={this.state.username ? this.state.username : ''}
					onChange={(val) => this.setInputValue('username', val)}
				/>

				<InputField
					type='password'
					placeholder='パスワード	'
					value={this.state.password ? this.state.password : ''}
					onChange={(val) => this.setInputValue('password', val)}
				/>

				<SubmitButton className="loginboder"

					text='ログイン'
					disable={this.state.buttonDisabled}
					onClick={() => this.login()}
				/>
				<span>{this.state.error}</span>

			</div>
		);
	}
}
export default withRouter(LoginForm);
