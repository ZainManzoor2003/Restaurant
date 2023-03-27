import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineDialerSip} from 'react-icons/md'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div className="contact" id='con'>
                <h3 className='responsive-heading'><span>Contact</span>US</h3>
                <div className="contact-content">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.630247301!2d66.59495276733487!3d25.193389472945338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679748212508!5m2!1sen!2s" width="50%" height="400px"
                        style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                    <form className='form'>
                        <h4>GET IN TOUCH</h4>
                        <div className="name">
                           <div className="icon"> <BsFillPersonFill/></div>
                        <input type="text" name="" id="" placeholder='Name'/>
                       </div>
                       <div className="email">
                           <div className="icon"> <AiOutlineMail/></div>
                        <input type="email" name="" id="" placeholder='Email'/>
                       </div>
                       <div className="number">
                           <div className="icon"> <MdOutlineDialerSip/></div>
                        <input type="number" name="" id="" placeholder='Number'/>
                       </div>
                        <button className='btn'>Contact Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}
