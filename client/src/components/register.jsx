import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import "../styles/login.css"

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password1: '',
            isLoggedIn: sessionStorage.getItem('isLoggedIn')
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
                sessionStorage.setItem('key', JSON.stringify(token));
                sessionStorage.setItem('isLoggedIn', true);
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
                    <div className="form-group">
                        <input placeholder="Name" className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.name}</span> */}
                    </div>
                    <div className="form-group">
                        <input placeholder="Email Address" className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.email}</span> */}
                    </div>
                    <div className="form-group">
                        <input placeholder="Password" className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.password}</span> */}
                    </div>
                    <div className="form-group">
                        <input placeholder="Confirm Password" className="form-control" type="password" name="password1" value={this.state.password1} onChange={this.handleChange}></input>
                        {/* <span className="validation-error">{this.state.errors.password1}</span> */}
                    </div>
                    <button className="btn btn-primary" type="submit">Sign Up</button>

                    <div className="switch-section-register">
                        <div>Already have an account. Log in instead!!!</div>
                        <Link to="/login">Log In</Link>
                    </div>
                </form>
            );
        }
    }
}

export default SignUp;