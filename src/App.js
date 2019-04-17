    
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Importing the Components to be used in their respective routes
import Create from './components/create-dep.component';
import Edit from './components/edit-dep.component';
import Index from './components/index.component';
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/index" target="_self">
              <img src={logo} width="140" height="140"  />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Departments</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create Department</Link>
                </li>

              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;