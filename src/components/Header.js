import React from 'react'
import { FiGithub,FiShoppingCart,FiUser } from "react-icons/fi"
import './Header.css'

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
                                <a href="/dashboard">Login<FiUser/></a>
                                <a href="/cart">Cart<FiShoppingCart /></a>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Header
