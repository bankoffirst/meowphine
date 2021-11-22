import React, {useContext} from "react";
import {Redirect, Link} from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import { FiGithub,FiShoppingCart,FiUser } from "react-icons/fi"
import './Header.css'
import './Dashboard.css'
function Dashboard()  {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login"/>;
    
    }
    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">MeowPhine <FiGithub /> - Welcome </a>
                    </div>
                        <div className = "menu-logout">
                        <a href="/login" onClick={() => firebaseConfig.auth().signOut()} className="logout">Log out<FiUser/></a>
                        </div>
                </div>
                            <div className= "dashboard">
                                <h1>Welcome {currentUser.email}</h1>
                                <p>This is dashboard </p>
                            </div>
                </div>
            </div>
    )
}
export default Dashboard;