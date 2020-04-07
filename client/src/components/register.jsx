import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password1: '',
            isLoggedIn: localStorage.getItem('isLoggedIn')
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
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password1: this.state.password1
        }
        axios.post(`http://localhost:4000/api/accounts/register`, payload).then(data => {
            if (data.data.success === true) {
                const token = {
                    'token': data.data.token,
                    'email': data.data.email
                }
                localStorage.setItem('key', JSON.stringify(token));
                localStorage.setItem('isLoggedIn', true);
                this.setState({
                    isLoggedIn: true
                });
                this.props.stateChange({
                    isLoggedIn: true
                });
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect from="/login" to="/"></Redirect>
        }
        else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up!</h3>
                    <div className="form-group">
                        <label> Name </label>
                        <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.name}</span> */}
                    </div>
                    <div className="form-group">
                        <label> Email Address </label>
                        <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.email}</span> */}
                    </div>
                    <div className="form-group">
                        <label> Password </label>
                        <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.password}</span> */}
                    </div>
                    <div className="form-group">
                        <label> Confirm Password </label>
                        <input className="form-control" type="password" name="password1" value={this.state.password1} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.password1}</span> */}
                    </div>
                    <button className="btn btn-primary" type="submit">Sign Up</button>

                    <div>
                        <span>Already have an account. Log in instead!!!</span>
                        <Link to="/login">Log In</Link>
                    </div>
                </form>
            );
        }
    }
}

export default SignUp;