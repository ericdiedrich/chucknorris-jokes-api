import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div className="form_container">
                <form className="formwrapper" onSubmit={this.props.getJoke}>
                    <input type="text" name="firstname" placeholder="First Name: "/>
                    <input type="text" name="lastname" placeholder="Last Name: "/>
                    <button className="up">Joke Me</button>
                </form>
            </div>
        );
    }
}

export default Form;