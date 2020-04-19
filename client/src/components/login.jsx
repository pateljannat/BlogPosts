import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            'isLoggedIn': sessionStorage.getItem('isLoggedIn')
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`http://localhost:4000/api/accounts/login`, payload).then(data => {
            if (data.data.success === true) {
                const token = {
                    'token': data.data.token,
                    'email': data.data.email
                }
                sessionStorage.setItem('key', JSON.stringify(token) );
                sessionStorage.setItem('isLoggedIn', true);
                this.setState({
                    isLoggedIn: true
                });
                this.props.stateChange({
                    isLoggedIn: true
                });
            }
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect from="/login" to="/"></Redirect>
        }
        else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In!</h3>
                    <div className="form-group">
                        <label> Email Address </label>
                        <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        {/*  <span className="validation-error">{this.state.errors.email}</span> */}
                    </div>
                    <div className="form-group">
                        <label> Password </label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.password}</span> */}
                    </div>
                    <button className="btn btn-primary" type="submit">Log In</button>

                    <div>
                        <span>Dont have an account. Sign Up now!!!</span>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </form>
            );
        }

    }
}

export default Login;