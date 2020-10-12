import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Auth from './pages/Auth'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <Header />
            <Switch>
              <Route exact path='/login' render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
            </Switch>
          </>
      </Router>
    );
  }
}

export default App;
