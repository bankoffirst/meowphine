import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import { FiGithub } from 'react-icons/fi'
import './Login.css'
import './Header.css'
import { Link,useHistory } from 'react-router-dom'

function LogIn() {
    const history = useHistory();
    const handleSubmit = (event) => {
        const { email, password } = event.target.elements;
        event.preventDefault();
        firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((auth) => {
            history.push("/")
        })
        .catch(e => alert(e.message))
        
    }
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <>
        <div className="header-log">
            <div className = "container-log">
                <div className = "header-con-log">
                    <div className = "logo-login"><a href="/">MeowPhine <FiGithub /> - Log in</a>
                    </div>
                </div>
            </div>
        </div>
                <div className="bg">
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
                        <button type="submit" className="btn btn-success">Submit</button>  -  <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                        
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}
export default LogIn;
