import React from 'react'
import toplayer from '../assets/images/subscribetoplayer.webp'
import bottomlayer from '../assets/images/subscribelayer2.webp'
import ellipse1 from '../assets/images/subscribeellipse1.webp'
import ellipse2 from '../assets/images/subscribeellipse2.webp'
const Subscribe = () => {
  return (
    <div className=' bg-blue pt-263 pb-270 position-relative z-1 mb--1 mt--1' id='Subscribe'>
      <div className="container">
<h2 className='text-white text-center font-outfit fs-52 lh-62 fw-semibold mb-3 ' data-aos="zoom-in-down">Subscribe Newsletter</h2>
<p className='text-white font-outfit text-center fs-16 fw-normal lh-24 mb-40 opacity-90' data-aos="zoom-in-down">Subscribe to our newsletter for the latest news, offers, and eco-tips.</p>
<form name='join' className='d-flex justify-content-between pl-20' data-aos="zoom-in-up">
    <input type="text" placeholder='Enter your email ' className='font-outfit text-white bg-transparent outline-none border-none text-start w-100' />
    <div className=' d-flex justify-content-end'><input type="button" value="Join" className='join-btn fs-16 font-outfit lh-24 fw-semibold ms-2  br-10 px-32 py-15' /></div>
</form>
      </div>
      <img src={ellipse1} alt="e" className='subscribeellipse1 d-none d-md-block' />
      <img src={ellipse2} alt="e"  className='subscribeellipse2 d-none d-md-block'/>
      <img src={toplayer} alt="layer" className='subscribelayer1' />
      <img src={bottomlayer} alt="layer" className='subscribelayer2' />
    
    </div>
  )
}

export default Subscribe
