import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Main from './view/main/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/main/one/todo" push />} />
                <Route path="/main" component={Main} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
