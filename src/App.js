import React, { Component } from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'
import Github from './Github'
import Pokemon from './Pokemon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Ain't no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/github">GitHub API</NavLink>
            </li>
            <li>
              <NavLink to="/pokemon">Pokémon API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/pokemon" component={Pokemon} />
          <Route render={() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
