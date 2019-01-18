import React, { Component } from 'react';
import {Link, Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";

//Import Container
import LoginContainer from "../Login/LoginContainer";
import SignInContainer from "../SignIn/SignInContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HomeContainer from "../Home/HomeContainer";

//import Style
import './App.css';

class App extends Component {
    browserHistory = createBrowserHistory();

    login(){
        alert("Login");
    }

  render() {
    return (
        <Router history={this.browserHistory}>
        <div className={"App"}>
            <div className={"App__header"}>
                <div className={"App__header-brand"}>Gestion de budget</div>
                <div className={"App__header-nav"}>
                    <button onClick={this.login}>Log in</button>
                    <Link to={"/signin"}><button>Sign in</button></Link>
                    <Link to={"profile"}><button>Profile</button></Link>
                    <Link to={"/"}><button>Dashboard</button></Link>
                    <Link to={"/"}><button>Contact</button></Link>
                </div>
            </div>
            <div className="App__body">
                    <React.Fragment>
                        <Route exact path={"/"} component={HomeContainer} />
                        <Route exact path={"/profile"} component={ProfileContainer}/>
                        <Route exact path={"/login"} component={LoginContainer}/>
                        <Route exact path={"/signin"} component={SignInContainer}/>
                    </React.Fragment>
            </div>
            <div className={"App__footer"}>
                <a href="https://github.com/FlorianPaumier" target="_blank">
                    <i className="fab fa-github-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/florian-paumier-841840147/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        </Router>
    );
  }
}

export default App;
