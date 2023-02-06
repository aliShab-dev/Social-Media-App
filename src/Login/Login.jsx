import React from "react";
import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {

    return(
        <div className="login">
            <div className="cart">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, vero accusantium temporibus ipsa harum error repellat, asperiores sed non natus debitis distinctio voluptatibus.</p>
                    <span>Don't need to answer?</span>

                    <Link to='/register'>
                        <button>Register</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>login</h1>
                    <form>
                        <input type="text" name="" id="" placeholder="user name"/>
                        <input type="password" name="" id="" placeholder="password"/>
                        <button type="submit" id="">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login