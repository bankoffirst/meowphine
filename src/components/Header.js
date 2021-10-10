import React from 'react'
import { FiGithub,FiShoppingCart,FiUser } from "react-icons/fi"
import './Header.css'
import LogIn from './Login'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">MeowPhine <FiGithub /></a>
                    </div>
                        <div className = "search">
                            <input type="text" placeholder="Search.."></input>
                        </div>
                            <div className = "menu">
                                <a href="/home">Login<FiUser/></a>
                                <a href="/cart">Cart<FiShoppingCart /></a>
                            </div>
                </div>
            </div>
        </div>
    )
}

//<a href="#">Login<FiUser/></a> <Link to="/home">Login <FiUser/></Link>
export default Header
