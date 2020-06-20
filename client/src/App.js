import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import CreatePosts from './components/createPosts';
import ListPosts from "./components/listPosts";
import Login from "./components/login";
import Registration from "./components/register";
import "./styles/App.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: sessionStorage.getItem('isLoggedIn')
    }
    this.stateChange = this.stateChange.bind(this);
  }

  //Based on changes in child component, stateChange function changes the state of this component
  stateChange(newState) {
    this.setState(newState)
  }

  //Checks if the user is loggedIn or not
  //If the user is not logged in then displays the login component
  //Else dispays the notes
  render() {
    if (!this.state.isLoggedIn) {
      return (
        <Router>
          <div className="login-container">
          <div  className="login-form">
            <div className="login-heading">
              <h2>Webnote</h2>
              <p>Remember everything important.</p>
            </div>
            <Route exact path="/register" render={(props) =>
              <Registration stateChange={this.stateChange} ></Registration>
            } />
            <Route exact path="/login" render={(props) =>
              <Login stateChange={this.stateChange}></Login>
            } />
            <Redirect from="/" to="login" />
          </div>
          </div>
        </Router>
      )
    }
    return (
      <Router>
        <div className="container">
          <NavBar stateChange={this.stateChange}></NavBar>
        </div>
        <Route className="container" path="/" exact component={ListPosts} />
        <Route path="/edit/:id" exact render={(props) => 
        <CreatePosts {...props} isNew={false}></CreatePosts>
        } />
        <Route path="/create" exact render={(props) => 
        <CreatePosts {...props} isNew={true}></CreatePosts>
        } />
      </Router>

    );
  }
}

export default App;