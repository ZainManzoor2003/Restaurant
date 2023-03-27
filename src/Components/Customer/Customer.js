import React,{useEffect} from 'react'
import { RiStarSFill } from "react-icons/ri"
import CustomerData from './CustomerData.js'
import Aos from 'aos'
import './Customer.css'

export default function Customer() {
    useEffect(() => {
        Aos.init({duration:500,delay:200});
      });
    return (
        <>
            <div className="customers" id='re'>
                <h3 className='responsive-heading'>Customer's<span>Review</span></h3>
                <div className="customer-cards">
                    {CustomerData.map((customerr, index) => (
                        <div data-aos="flip-down" className="customer-card">
                            <img src={CustomerData[index].url1} alt="" />
                            <p>{CustomerData[index].para}</p>
                            <img src={CustomerData[index].url2} alt="" />
                            <h4>{CustomerData[index].heading}</h4>
                            <div className="stars">
                                <div className="star"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
