import React, { useEffect, useState } from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './Home.css'

export default function Home() {
  const [temp1,settemp1]=useState(0);
  const [temp2,settemp2]=useState(0);
  useEffect(()=>{
    const timer=setTimeout(() => {
      temp1!==3000?settemp1(temp1+50):clearTimeout(timer);
    }, 50);
  },[temp1]);
  useEffect(()=>{
    const timer=setTimeout(() => {
      temp2!==550?settemp2(temp2+50):clearTimeout(timer);
    }, 200);
  },[temp2]);
  const [text]=useTypewriter(
    {
      words:['Morning','Afternoon','Evening','Night'],
      loop:{},
      typeSpeed:120,
      delaySpeed:80,
    }
  );
  return (
    <>
    <section className='home' id='hm'>
      <div className="content">
        <h3>Fresh <span>Food In The</span></h3><h3>{text} <span><Cursor/></span></h3>
        <p>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
      <button className="btn">Get Yours Now</button>
      </div>
      <div className="home-records">
        <div className="row">
          <h4>
            <div className="count">+  {temp1}</div>
            World  <span>Wide</span>
          </h4>
          <h4>
            <div className="count">+  {temp2}</div>
            In  <span>Paksitan</span>
          </h4>
        </div>
      </div>

    </section>
    </>
  )
}
