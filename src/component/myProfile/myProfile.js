import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import '../../Signup.css'
import Header from '../../container/Header';


class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirm: '',
        }
        // this.getInfo = this.getInfo.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };

    //   async getInfo(event) {
    componentDidMount() {
        const { name, email, password } = this.state;
        // event.preventDefault();
        console.log(this.state)
        console.log(localStorage.getItem("id"))
        console.log(localStorage.getItem("token"))

        axios.get(
            "http://kitkat-api.herokuapp.com/api/users/" + localStorage.getItem("id"),
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            }
        )
        .then((res) => {
            console.log(res.data);
            this.setState({
                name: res.data.fullname,
                email: res.data.email
            })
        })
        .catch((err) => {
            console.log(err);
        });

        // axios({
        //     method: "GET",
        //     url:
        //         "http://kitkat-api.herokuapp.com/api/users/" + localStorage.getItem("id"),
        //     header: {
        //         'Authorization': `Bearer ${localStorage.getItem("token")}`,
        //     },
        // })
        //     .then((res) => {
        //         console.log(res.data);
        //         this.setState({
        //             name: res.data.fullname,
        //             email: res.data.email
        //         })
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    //   async onSubmit(event) {
    //     const { name, email, password } = this.state;
    //     event.preventDefault();
    //     await axios({
    //       method: "PUT",
    //       url:
    //         "http://kitkat-api.herokuapp.com/api/users/87d8fff2-d5ae-4958-96e7-8f03a1f58cf6",
    //       body: {
    //         username: name,
    //         email: email,
    //         password: password,
    //       },
    //     })
    //       .then((res) => {
    //         console.log(res.data);
    //         this.props.history.push('/');
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <div className="App">
                    <Header />
                    <div className="signup-form">
                        <form>
                            <h3>プロフィール</h3>
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

                            <div className='form-group'>
                                <label for='password'>パスワード確認 :</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='password_confirm'
                                    name='password_confirm'
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

        );
    }
}

export default MyProfile;