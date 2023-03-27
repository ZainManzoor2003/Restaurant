import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className="about" id='ab'>
    <h3 className='responsive-heading'><span>About</span>US</h3>
    <div className="content">
        <img src="./Images/about.png" alt="" />
        <div className="right-content">
            <h4>What Makes Our Food Special?</h4>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, 
             Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis,
             Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
            <button className='btn'>Learn More</button>
        </div>
    </div>
    </div>
    </>
  )
}
