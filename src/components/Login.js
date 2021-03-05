import React from 'react'
import '../App.css';

export default function Login() {
    return (
        <div>
            <section>
                <div className="container">
                    {/* Sign in form */}
                    <div class="form sign-in-form">
                        <div className="wrapper">
                            <form action="/">
                                <h1>Sign In</h1>
                                <p>Use your e-mail and password to sign in.</p>
                                <input type="email" placeholder="example@email.com" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Sign In</button>
                            </form>
                        </div>
                    </div>


                    {/* Sign up form */}
                    <div className="sign-up-form">
                        <div className="wrapper">
                            <form action="/">
                                <h1>Sign up</h1>
                                <p>Please, provide all the correct info to create an account.</p>
                                <input type="text" placeholder="Full Name"/>
                                <input type="email" placeholder="example@email.com" />
                                <input type="password" placeholder="Password" />
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>



                    {/* Overlay Container */}
                    <div className="overlay-container">
                        <div className="overlay-left">
                            <h1>Create Account</h1>
                            <p>Or</p>
                            <button>Log In</button>
                        </div>

                        <div className="overlay-right">
                            <h1>Please, Log In</h1>
                            <p>Or</p>
                            <button>Create Account</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
