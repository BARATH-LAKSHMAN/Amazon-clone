import React from "react";
import "./Product.css";


function Product({ id, content, price, star, src}){
    return(
        <div className="product">
            <div className="product-info">
                <p>{content}</p>
                <p className="product-price">
                    <sup>&#8377;</sup>
                    <strong>{price}</strong>
                    <sup>00</sup>
                </p>
                <div className="product-rating">
                    {Array(star).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={src}></img>
            <button>Add to Basket</button>
        </div>
    )
}


export default Product;