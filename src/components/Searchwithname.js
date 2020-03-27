import React from 'react';
import '../App.css';
import Form from './Form'
import Joke from './Joke'
import ChuckLogo from '../img/ChuckNorris224.png'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Searchwithname extends React.Component {

  state = {
    joke: undefined,
    error: undefined
  }

  getJoke = async (e) => {
    e.preventDefault();
    const firstnameSearch = e.target.elements.firstname.value
    const lastnameSearch = e.target.elements.lastname.value
    const api_call = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstnameSearch}&lastName=${lastnameSearch}`);
    const data = await api_call.json();
    console.log(data);
    if (firstnameSearch && lastnameSearch) {
      this.setState({
        joke: data.value.joke,
        error: ""
      });
    } else {
      this.setState({
        joke: undefined,
        error: "Something went wrong"
      });
    }
  }

  render() {
    return(
      <div className="JokeContainer">
        <div className="AppImg">
          <img alt="chucklogo" src={ChuckLogo}/>
          <Form getJoke={this.getJoke} />
        </div>
        <div>
          <Joke 
            joke={this.state.joke}
            error={this.state.error}
          />
        </div>
        {/* <div className="joke_container">
          {this.props.joke && <p className="joke_key"><span className="joke_value"> {this.props.joke}</span></p>}
          {this.props.error && <p className="joke_error">{this.props.error}</p>}
        </div> */}
      </div>
    );
  }
}

export default Searchwithname;