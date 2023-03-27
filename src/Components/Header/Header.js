import React, { useState } from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaSearch } from "react-icons/fa";
import './Header.css'

export default function Header() {
    const [inputtrue,setinputtrue]=useState(false);
    const [navtrue,setnavtrue]=useState(false);
    return (
        <>
            <header>
                <div className='header'>
                    <div className="logo">
                        <img src="./Images/logo.png" alt="My Pic" />
                    </div>
                    <nav className={!navtrue?'nav-active':' nav-non-active'}>
                        <ul>
                            <li><a href='#hm'>Home</a></li>
                            <li><a href='#ab'>About</a></li>
                            <li><a href='#mn'>Menu</a></li>
                            <li><a href='#pr'>Products</a></li>
                            <li><a href='#re'>Review</a></li>
                            <li><a href='#con'>Contact</a></li>
                            <li><a href='#blg'>Blogs</a></li>
                        </ul>
                    </nav>
                    <div className="icons">
                        <div className="search-icon" onClick={()=>setinputtrue(!inputtrue)}><FaSearch/></div>
                        <div className="cart"><BsFillCartFill /></div>
                        <div className="burger" onClick={()=>setnavtrue(!navtrue)}><GiHamburgerMenu /></div>
                    </div>
                    <div className={inputtrue?'search-bar active':'search-bar non-active'}>
                        <input type="text" placeholder='Search Here...'/>
                        <div className="search-icon"><FaSearch/></div>
                    </div>
                </div>
            </header>
        </>
    )
}
