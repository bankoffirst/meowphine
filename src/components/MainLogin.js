import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'
import LogIn from './Login'
import Signup from './SignUp'
import './Header.css'
import { FiGithub } from "react-icons/fi"

function MainLogin ()  {
  return (
    <div className="header">
        <div className = "container">
            <div className = "header-con">
                <div className = "logo-container">
                    <a href="/">MeowPhine <FiGithub /></a>
                    <div>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/login" component={LogIn} />
                        <Route exact path="/signup" component={Signup} />
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default MainLogin;