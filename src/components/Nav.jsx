import React, { useState } from 'react'
import logo from '../assets/images/logo.webp'
const Nav = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
    <nav className="bg-nav py-14 position-relative z-3">
          <div className="container">
            <div className=" d-flex align-items-center justify-content-between">
              <a href="#">
                <img
                  src={logo}
                  alt="Logo"
                />
              </a>
              <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-outfit fs-16 fw-normal lh-17 nav_line position-relative head"
                    href="#create"
                  >
               How It Works
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-outfit fs-16 fw-normal lh-17  nav_line position-relative head"
                    href="#recycling"
                  >
                 For Brands
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-outfit fs-16 fw-normal lh-17  nav_line position-relative head"
                    href="#Faq"
                  >
               About Us
                  </a>
                </li>
                <li onClick={() => setshow(!show)}>
                  <a
                    className=" text-white font-outfit fs-16 fw-normal lh-17  nav_line position-relative head"
                    href="#Subscribe"
                  >
               Careers
                  </a>
                </li>
              </ul>
              <div
                onClick={() => setshow(!show)}
                className={`${show ? "" : "cross"} navline`}
              >
                <span className="crl-1"></span>
                <span className="crl-2"></span>
                <span className="crl-3"></span>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nav
