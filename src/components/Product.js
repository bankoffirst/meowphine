import React from 'react'
import './Product.css'
import { MdAttachMoney } from "react-icons/md"
function Product() {
    return (
        <div className="container-pro">
            <div className="contain-pro-grid">
                <div className="gal-cat"></div>
            
                <div className="contain-pro-grid-text">
                <h1 className="name-pro" >
                    <span>Scotish Fold Short Hair</span>
                </h1>
                <h1 className="price-pro">239.99$</h1>
                <div className="info-grid">
                    <span className="info-pro-head">Infomation</span>
                    <span className="info-pro-p">Scotish Fold Short Hair</span>
                    <span className="info-pro-p">Color - Grey, White</span>
                    <span className="info-pro-p">Eyes - Blue eyes</span>
                    <span className="info-pro-p">City - Bangkok Thailand</span>
                    <span className="info-pro-p">Age - 5 week</span>
                </div>
                <div className="cart-pro">  
                    <button className="cart">Purchase<MdAttachMoney/></button>
                </div>
            </div>
            </div>
        </div>
    )}

export default Product;

