import React from 'react'
import { FiGithub,FiShoppingCart,FiUser } from "react-icons/fi"
import './Header.css'

function Cart() {
    return (
        <div className="header">
            <div className = "container">
                <div className = "header-con">
                    <div className = "logo-container">
                        <a href="/">MeowPhine <FiGithub /> - Cart</a>
                        
                    </div>
                        </div>
                            <div className = "menu">
                                <a href="/">Log out<FiUser/></a>
                            </div>
                </div>
            </div>
    
    )
}

//<a href="#">Login<FiUser/></a> <Link to="/home">Login <FiUser/></Link>
export default Cart
//mofin coming