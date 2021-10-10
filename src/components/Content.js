import React, { useState } from 'react'
import "./Content.css" 
import { FiGithub,FiShoppingCart,FiUser,FiX } from "react-icons/fi";

let check = true

function Content() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(! click);
    
    return (
        <div className="container">
            <section className="contain-grid">
                <div className={click ? "contain-item1 action" : "contain-item1"}>
                    <div className='contain-inner'>
                            <a href="#" className="cat-btn" onClick={handleClick}>CAT</a>
                            {click ? (
                                check = false
                            ) : (
                                check = true
                            )}
                            
                    </div>
                </div>
                <div className="contain-item2">
                    <div className='contain-inner'>
                    <a href="#" className="cat-btn">DOG</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content
