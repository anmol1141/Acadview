import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Personal from './components/Personal';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/personal' component={Personal} />
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
