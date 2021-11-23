import React, { useState } from 'react'
import "./Content.css" 

let check = true

function Content() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(! click);
    const [click2, setClick2] = useState(false);
    const handleClick2 = () => setClick2(! click2);
    return (
        <div className="container">
            <section className="contain-grid">
                <div className={click ? "contain-item1 action" : "contain-item1"}>
                    <div className='contain-inner'>
                            <a href="/cat" className="cat-btn" onClick={handleClick}>CAT</a>
                            {click ? (
                                check = false
                            ) : (
                                check = true
                            )}
                            
                    </div>
                </div>
                <div className={click2 ? "contain-item2 action" : "contain-item2"}>
                    <div className='contain-inner'>
                            <a href="/dog" className="dog-btn" onClick={handleClick2}>DOG</a>
                            {click2 ? (
                                check = false
                            ) : (
                                check = true
                            )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Content
