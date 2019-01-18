import React, {Component, Fragment} from 'react';
import {Link, Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import swal from "sweetalert";

//Import Container
import LoginContainer from "../Login/LoginContainer";
import SignInContainer from "../SignIn/SignInContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HomeContainer from "../Home/HomeContainer";

//import Style
import './App.css';
import ContactContainer from "../Contact/ContactContainer";

class App extends Component {
    browserHistory = createBrowserHistory();

    state = {
        isAuthenticated : false,
        user : null,
        token : null
    };

    constructor(props, context) {
        super(props, context);

        this.loginRef = React.createRef("");
    }


    componentWillMount() {
        let token = localStorage.getItem("token-gest-budget");

        if(token){
            //test si le token est encore valable
            let user = [];
            this.setState({
                isAuthenticated : true,
                token: token,
                user : user
            })
        }else{
            this.browserHistory.push("/");
        }
    }

    componentWillUpdate() {

        if(this.state.token){
            //test si le token est encore valable
            let user = [];
            this.setState({
                isAuthenticated : true,
                user : user
            })
        }else{
            this.browserHistory.push("/");
        }
    }

    openLogin = () => {
        this.loginRef.current.style.display = "block";
    };

    closeLogin = () => {
        this.loginRef.current.style.display = "none";

    };

    login(){

    }


  render() {
    return (
        <Router history={this.browserHistory}>
        <div className={"App"}>
            <div className={"App__header"}>
                <div className={"App__header-brand"}>Gestion de budget</div>
                <div className={"App__header-nav"}>
                    {!this.state.isAuthenticated && (
                        <Fragment>
                            <button onClick={this.openLogin}>Log in</button>
                            <Link to={"/signin"}><button>Sign in</button></Link>
                        </Fragment>
                    )}
                    {this.state.isAuthenticated && (
                        <Fragment>
                            <Link to={"profile"}><button>Profile</button></Link>
                            <Link to={"/"}><button>Dashboard</button></Link>
                        </Fragment>
                    )}
                    <Link to={"/contact"}><button>Contact</button></Link>
                </div>
            </div>
            <div className="App__body">
                    <React.Fragment>
                        <Route exact path={"/"} component={HomeContainer} />
                        <Route exact path={"/profile"} component={ProfileContainer}/>
                        <Route exact path={"/contact"} component={ContactContainer}/>
                        <Route exact path={"/signin"} component={SignInContainer}/>
                    </React.Fragment>
                    <LoginContainer login={this.loginRef} close={this.closeLogin}/>
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
