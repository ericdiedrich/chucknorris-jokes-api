import React from 'react';
import './App.css';
// import Form from './components/Form'
// import Joke from './components/Joke'
// import ChuckLogo from './img/ChuckNorris224.png'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Searchwithname from './components/Searchwithname';
import Navbar from './components/Nav';

class App extends React.Component {
  render() {
    return(
      <div className="">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={<App/>}/>
            <Route path="/search" component={<Searchwithname/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



<div className="JokeContainer">
          
          {/* <div className="AppImg">
            <img alt="chucklogo" src={ChuckLogo}/>
          </div> */}
          {/* <Form getJoke={this.getJoke} />
          <Joke 
            joke={this.state.joke}
            error={this.state.error}
          /> */}
        </div>