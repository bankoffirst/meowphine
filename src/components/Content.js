import React from 'react'
import "./Content.css"

function content() {
    return (
        <div className="container">
            <section className="contain-grid">
                <div className="contain-item1">
                    <div className='contain-inner'>
                        <div>
                            Cat
                        </div>
                    </div>
                </div>
                <div className="contain-item2">
                    <div className='contain-inner'>
                        <div>
                            Dog
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default content
