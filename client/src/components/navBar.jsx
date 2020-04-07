import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Blog Posts</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Posts</Link>
                            </li>
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