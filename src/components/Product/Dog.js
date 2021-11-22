import React from 'react'
import "../Content.css" 
import Footer from '../Footer'
let bannerData = {
    title: "No Dogs at this time ",
    desc: "Dog is coming ..."
}

function Dog() {
    return (
        <>
        <div className="dog-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Dog
