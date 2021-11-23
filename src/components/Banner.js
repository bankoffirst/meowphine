import React from 'react'
import "./Banner.css"
import "./Content.css"
let bannerData = {
    title: "MeowPhine",
    desc: "A creature that is more than a 'Pet' "
}

function Banner() {
    return (
        <div className="banner-bg">
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
    )
}

export default Banner
