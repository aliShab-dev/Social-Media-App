import React from "react";
import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {

    return(
        <div className="register">
            <div className="cart">
                <div className="left">
                    <h1>Ali SNS</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nostrum ducimus. Saepe. adipisicing elit. Molestias, vero accusantium temporibus ipsa harum error repellat, asperiores sed non natus debitis distinctio voluptatibus.</p>
                    <span>already sign in?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>register</h1>
                    <form>
                        <input type="text" name="" id="" placeholder="user name"/>
                        <input type="email" name="" id="" placeholder="Email"/>
                        <input type="password" name="" id="" placeholder="password"/>
                        <input type="tesxt" name="" id="" placeholder="Name"/>
                        <button type="submit" id="">register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register