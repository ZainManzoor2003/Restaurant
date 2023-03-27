import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <footer className="footer" >
        <div className="icons">
            <div className="footer-icon"><FaFacebookF/></div>
            <div className="footer-icon"><BsTwitter/></div>
            <div className="footer-icon"><BsInstagram/></div>
            <div className="footer-icon"><BsLinkedin/></div>
            <div className="footer-icon"><BsYoutube/></div>
        </div>
        <div className="last-links">
            <div className="links">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Products</li>
            <li>Riview</li>
            <li>Contact</li>
            <li>Blogs</li>
            </div>
        </div>
        <h4>Created By <span>Zain Manzoor </span>| All Rights Reserved</h4>
        
    </footer>
    </>
  )
}
