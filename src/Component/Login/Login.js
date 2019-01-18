import React from 'react';
import "../../Styles/login.css";

const Login = ({login, close}) => (
    <div id="id01" className="modal" ref={login}>

        <form className="modal-content animate">
            <div className="imgcontainer">
                <span className="close" onClick={close}
                      title="Close Modal">&times;</span>
            </div>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                        <button type="submit">Login</button>
            </div>

            <div className="container">
                <button type="button" onClick={close}
                        className="cancelbtn">Cancel
                </button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>
);

export default Login;
