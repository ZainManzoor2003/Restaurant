import React ,{useEffect}from 'react'
import BlogData from './BlogsData'
import Aos from 'aos';
import './Blogs.css'

export default function Blogs() {
    useEffect(() => {
        Aos.init({duration:500,delay:200});
      });
    return (
        <>
            <div className="blogs" id='blg'>
                <h3 className='responsive-heading'>Our<span>Blogs</span></h3>
                <div className="blog-cards">
                    {BlogData.map((customerr, index) => (
                        <div data-aos="zoom-in" className="blog-card">
                            <img src={BlogData[index].url} alt="" />
                            <div className="after-img">
                            <h3>{BlogData[index].heading1}</h3>
                            <h4>{BlogData[index].heading2}</h4>
                            <p>{BlogData[index].para}</p>
                            <button className='btn'>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
