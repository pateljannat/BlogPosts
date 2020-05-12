//Navbar cpmponent with a link to home page and a link to create new posts
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src="./WebNote.png" className="logo" alt="Logo"></img>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Create Posts</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;