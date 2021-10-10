import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { FiGithub } from 'react-icons/fi'
import './Login.css'
import './Header.css'
function LogIn() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        } catch(error) {
            alert(error);
        }
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <>
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">MeowPhine <FiGithub /> - Log in</a>
                    </div>
                </div>
            </div>
            </div>
                
                    <div className="container mt-5">
                    <div className ="login-container">
                        <h1>Log In</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
        </div>
        </>
    )
}
export default LogIn;

