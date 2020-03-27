import React from 'react';

class Joke extends React.Component {
    render() {
        return(
            <div className="joke_container">
                {this.props.joke && <p className="joke_key"><span className="joke_value"> {this.props.joke}</span></p>}
                {this.props.error && <p className="joke_error">{this.props.error}</p>}
            </div>
        );
    }
}

export default Joke;