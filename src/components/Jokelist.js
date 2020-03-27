import React from 'react';

class Jokelist extends React.Component {
    render() {
        return(
            <div className="joke_container">
                {this.props.jokes && <p className="joke_key"><span className="joke_value"> {this.props.jokes}</span></p>}
                {this.props.error && <p className="joke_error">{this.props.error}</p>}
            </div>
        );
    }
}

export default Jokelist;