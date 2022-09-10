import React from "react";
import '../App.css'

const SignUp = () => {
    return (
        <div className="Sign-up">
            <div className="Sign-up-text">
                <h1>Create an account today</h1>
                <h2>
                    Join the 1.1+ million college students who <br/>
                    use SubAlert to manage their subscriptions
                </h2>
            </div>
            <form className="SignUp-form">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp