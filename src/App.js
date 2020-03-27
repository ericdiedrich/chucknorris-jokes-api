import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Nav'
import Searchwithname from './components/Searchwithname'
import Home from './components/Home'
// import Neverendingjokes from './components/Neverendingjokes'
import MultiJokes from './components/MultiJokes';

class App extends React.Component {

  render() {
    return(
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/searchbyname" component={Searchwithname}/>
            <Route path="/neverending" component={MultiJokes}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;