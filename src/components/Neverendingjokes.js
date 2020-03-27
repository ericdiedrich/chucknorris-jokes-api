import React from 'react';
import '../App.css';
// import Form from './Form'
// import Joke from './Joke'
import ChuckLogo from '../img/ChuckNorris224.png'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Jokelist from './Jokelist'

class Neverendingjokes extends React.Component {

  state = {
    // jokes: undefined,
    jokes: [undefined, undefined, undefined, undefined, undefined],
    error: undefined
  }

  getneverendingJoke = async (e) => {
    e.preventDefault();
    // const firstnameSearch = e.target.elements.firstname.value
    // const lastnameSearch = e.target.elements.lastname.value
    const api_call = await fetch(`http://api.icndb.com/jokes/random/5`);
    const data = await api_call.json();
    console.log(data);
    console.log(data.value[0].joke)
    if (api_call) {
      this.setState({
        // jokes: data.value[0],
        jokes: [data.value[0].joke, data.value[1].joke, data.value[2].joke, data.value[3].joke, data.value[4].joke],
        error: ""
      });
    } else {
      this.setState({
        // jokes: undefined,
        jokes: [undefined, undefined, undefined, undefined, undefined],
        error: "Something went wrong"
      });
    }
  }

  render() {
    // getneverendingJoke()
    return(
      <div className="JokeContainer">
        <div className="AppImg">
          <img alt="chucklogo" src={ChuckLogo}/>
        </div>
        {/* <form onSubmit={this.getneverendingJoke}>
            <button className="fill">Get Joke List!</button>
        </form> */}
        <Jokelist jokes={this.state.jokes[0]} />
        <Jokelist jokes={this.state.jokes[1]} />
        <Jokelist jokes={this.state.jokes[2]} />
        <Jokelist jokes={this.state.jokes[3]} />
        <Jokelist jokes={this.state.jokes[4]} />
      </div>
    );
  }
}

export default Neverendingjokes;