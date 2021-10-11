import React from 'react'
import { FiGithub,FiShoppingCart,FiUser } from "react-icons/fi"
import './Header.css'
import './Dashboard.css'
import Product from './Product'

function Cart() {
    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">MeowPhine <FiGithub /> - Cart </a>
                    </div>
                        <div className = "menu-logout">
                        <a className="logout">User 1</a></div>
                        </div> 
                            <Product/>
                        </div>
                </div>
    
    )
}

//<a href="#">Login<FiUser/></a> <Link to="/home">Login <FiUser/></Link>
export default Cart
//mofin coming 