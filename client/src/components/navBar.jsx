//Navbar cpmponent with a link to home page and a link to create new posts
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";
import axios from 'axios';

class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();

        let token = JSON.parse(sessionStorage.getItem('key')).token;
        axios.get(`/api/accounts/logout`, token).then(data => {
            if (data.data.success === true) {
                sessionStorage.removeItem('key');
                sessionStorage.removeItem('isLoggedIn');
                this.props.stateChange({
                    isLoggedIn: false
                });
            }
        })
    }
 
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src="./WebNote.png" className="logo" alt="Logo"></img>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create</Link>
                            </li>
                            <li className="nav-item logout-link">
                                <span className="nav-link link-span" onClick={this.handleLogout}>Logout</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;