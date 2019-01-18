
import React, { Component } from 'react';
import Login from "./Login";

class LoginContainer extends Component {
    constructor(props, context) {
        super(props, context);

        console.log(this.props)
    }

    render() {
        return (
            <section>
                <Login login={this.props.login} close={this.props.close}/>
            </section>
        );
    }
}

export default LoginContainer;
