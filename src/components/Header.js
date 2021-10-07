import React from 'react'
import { FiGithub,FiSearch,FiShoppingCart,FiUser } from "react-icons/fi";

function Header() {
    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="#">MeowPhine <FiGithub /></a>
                        <input type="text" placeholder="Search.."></input>
                    </div>
                    <ul className = "menu">
                        <li className="menu-link">
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
