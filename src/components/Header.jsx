
import headerimg from '../assets/images/headerimg.webp'
import appstore from '../assets/images/appstore.webp'
import playstore from '../assets/images/playstore.webp'
import bottomlayer from '../assets/images/headerbottomlayer.webp'
import ellipse from '../assets/images/headellipse.webp'
import star from '../assets/images/Star.webp'
import arrow from '../assets/images/arrow.webp'
import Nav from './Nav'
const Header = () => {
  return (
    <div className='bg-blue min-vh-100 d-flex flex-column position-relative  z-1 mb--1'>
      <Nav/>
      <div className="flex-grow-1 justify-content-center d-flex align-items-center">
<div className="container pt-md-5 pt-4">
    <div className="row align-items-center pb-4 pt-md-4 pt-0">
        <div className="col-lg-7 pb-md-120 pb-5 "data-aos="fade-right">
            <h1 className='text-white font-outfit fs-80 lh-100 mb-19 max-w-616 text-center text-lg-start mx-auto mx-lg-0'>Recycle. Reward. <span className='font-rainbow fs-64 lh-83'>with cloopp</span></h1>
            <p className='text-white font-outfit fs-16 fw-normal lh-24 max-w-448 mb-38 text-center text-lg-start mx-auto mx-lg-0 opacity-90'>Get exclusive discounts and coupons from the hottest brands every time you recycle and track your environmental impact with the Cloopp App.</p>
            <div className='d-flex justify-content-center d-sm-block'>
              <div className="d-sm-flex gap-3 justify-content-center justify-content-lg-start d-block ">
                  <div className='mb-4 mb-sm-0'data-aos="fade-up"><a href="https://www.apple.com/in/app-store/" target='_blank'><img src={appstore} alt="appstore" className='w-180 h-54' /></a></div>
                  <div data-aos="fade-up"><a href="https://play.google.com/store/apps" target='_blank'><img src={playstore} alt="playstore" className='w-180 h-54' /></a></div>
              </div>
            </div>
        </div>
        <div className="col-lg-5 d-flex align-items-end justify-content-center ">
            <img src={headerimg} alt="img" className='w-lg-100' data-aos="fade-left" />
        </div>
    </div>
</div>
      </div>
      <img src={arrow} alt="arrow" className='headarrow d-none d-xl-block'/>
      <img src={star} alt="star" className='star' data-aos="zoom-in" />
      <img src={ellipse} alt="e" className='headellipse d-none d-sm-block' />
      <img src={bottomlayer} alt="layer" className='headerlayer' />
    </div>
  )
}

export default Header
