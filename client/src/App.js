import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import CreatePosts from './components/createPosts';
import ListPosts from "./components/listPosts";
import EditPosts from "./components/editPosts";
import Login from "./components/login";
import Registration from "./components/register";


class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: sessionStorage.getItem('isLoggedIn')
    }
    this.stateChange = this.stateChange.bind(this);
  }

  stateChange(newState) {
    this.setState(newState)
  }
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Router>
          <Route exact path="/register" component={() =>
            <Registration stateChange={this.stateChange} ></Registration>
          } />
          <Route exact path="/login" component={() =>
            <Login stateChange={this.stateChange}></Login>
          } />
          <Redirect from="/" to="login" />
        </Router>
      )
    }
    return (
      <Router>
        <div className="container">
          <NavBar></NavBar>
        </div>
        <Route className="container" path="/" exact component={ListPosts} />
        <Route path="/edit/:id" compo nent={EditPosts} />
        <Route path="/create" component={CreatePosts} />
      </Router>

    );
  }
}

export default App;