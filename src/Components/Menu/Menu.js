import React, { useEffect } from 'react'
import Data from './MenuData.js'
import Aos from 'aos';
import './Menu.css'

export default function Menu() {
    useEffect(() => {
        Aos.init({duration:200,delay:200});
      });
    return (
        <>
            <div className="menu" id='mn'>
                <h3 className='responsive-heading'>Our<span>Menu</span></h3>
                <div className="cards">
                    {Data.map((arr,index) => (
                        <div data-aos="flip-left" className="card">
                            <img src={Data[index].url} alt="" />
                            <h4>{Data[index].heading}</h4>
                            <div className="price">
                                <h4>{Data[index].price}</h4>
                                <span>{Data[index].o_price}</span>
                            </div>
                            <button className='btn'>Add to Cart</button>
                         </div>
                    ))}
                </div>
            </div>
        </>
    )
}
