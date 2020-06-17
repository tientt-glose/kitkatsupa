import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './UserStore.js';
import LoginForm from './LoginForm';
import SubmitButtom from './SubmitButton';
import { withRouter } from 'react-router-dom';
import './Signin.css';
import axios from 'axios';

class Signin extends React.Component {
	async componentDidMount() {

		try {

			let res = await fetch('/isLoggedIn',
				{
					method: 'post',
					headers: {
						'Accept': ' application/json',
						'Content-type': 'application/json'
					}
				});

			let result = await res.json();

			if (result && result.success) {
				UserStore.loading = false;
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;
			}

			else {
				UserStore.loading = false;
				UserStore.isLoggedIn = false;

			}

		}

		catch (e) {
			UserStore.loading = false;
			UserStore.isLoggedIn = false;

		}

	}

	async doLogout() {

		try {

			let res = await fetch('/logout',
				{
					method: 'post',
					headers: {
						'Accept': ' application/json',
						'Content-Type': 'application/json'
					}
				});

			let result = await res.json();

			if (result && result.success) {
				UserStore.isLoggedIn = false;
				UserStore.username = '';
			}

		}

		catch (e) {
			console.log(e)
		}

	}

	render() {
		if (UserStore.loading) {
			return (
				<div className='app'>
					<div className='containerr'>
						Loadingggg...
	        			</div>
				</div>
			);
		}
		else {
			if (UserStore.isLoggedIn) {
				return (
					<div className='app'>
						<div className='containerr'>
							Welcome{UserStore.username}
							<submitButton
								text={'Logout'}
								disabled={false}
								onClick={() => this.doLogout()}
							/>
						</div>
					</div>
				);
			}

			return (
				<div className="app">
					<div className='container1'>
						<submitButton
							text={'Log out'}
							disabled={false}
							onClick={() => this.doLogout()}
						/>
						<LoginForm />
					</div>
				</div>
			);
		}
	}
}
export default withRouter(observer(Signin));
