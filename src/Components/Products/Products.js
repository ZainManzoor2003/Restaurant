import React, { useEffect } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { AiFillEye } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import { RiStarSFill } from "react-icons/ri"
import ProductData from './ProductData.js';
import Aos from 'aos'
import './Products.css'

export default function Products() {
    useEffect(() => {
        Aos.init({duration:500,delay:200});
      });
    return (
        <>
            <div className="products" id='pr'>
                <h3 className='responsive-heading'>Our<span>Products</span></h3>
                <div className="product-cards">
                    {ProductData.map((arr, index) => (
                        <div data-aos="flip-up"className="product-card">
                            <div className="product-icons">
                                <div className="cart"><BsFillCartFill /></div>
                                <div className="heart"><AiFillHeart /></div>
                                <div className="eye"><AiFillEye /></div>
                            </div>
                            <img src={ProductData[index].url} alt="" />
                            <h4>{ProductData[index].heading}</h4>
                            <div className="stars">
                                <div className="star"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                            </div>
                            <div className="price">
                                <h4>{ProductData[index].price}</h4>
                                <span>{ProductData[index].o_price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
