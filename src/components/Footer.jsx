import React from "react";
import footlogo from "../assets/images/footlogo.webp";
import { Facebook, Insta, Telegram, Twitter } from "./Icon";
const Footer = () => {
    const Dates = new Date()
    const year = Dates.getFullYear()
  return (
    <div className="bg-base pt-md-5 pt-3">
      <div className="container pb-80 pb-md-5 pb-sm-4 pb-3">
        <div className="row pb-lg-5 pb-0">
          <div className="col-lg-5 mb-4 mb-sm-5 mb-lg-0">
            <img src={footlogo} alt="logo" className="mb-3" />
            <p className="font-outfit text-white fs-16 lh-24 fw-normal max-w-345 opacity-80 mb-0">
              Cloopp revolutionizes recycling for everyone. Join, earn, and
              support sustainability.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-4 col-6 d-flex justify-content-lg-end mb-4 mb-sm-5 mb-md-0">
                <ul className="mb-0 ps-0">
                  <li className="mb-sm-3 mb-2">
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal  footunderline"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-sm-3 mb-2">
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal footunderline"
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="mb-sm-3 mb-2">
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal footunderline"
                    >
                      For Brands
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal footunderline"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-6 d-flex justify-content-lg-end">
                <ul className="mb-0 ps-0">
                  <li className="mb-sm-3 mb-2">
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal footunderline"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-outfit fs-16 lh-17 fw-normal footunderline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 d-flex justify-content-lg-end">
                <div className="pt-0">
                  <p className="text-white font-outfit fs-16 lh-17 fw-normal opacity-80 mb-12">
                    Follow Us{" "}
                  </p>
                  <div className="d-flex gap-10">
                    <a href="https://www.instagram.com/" target="_blank" className="icons">
                      <div className="box d-flex justify-content-center align-items-center">
                        <Insta />
                      </div>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className="icons">
                      <div className="box d-flex justify-content-center align-items-center">
                        <Facebook />
                      </div>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="icons">
                      <div className="box d-flex justify-content-center align-items-center">
                   <Twitter/>
                      </div>
                    </a>
                    <a href="https://telegram.org/" target="_blank" className="icons">
                      <div className="box d-flex justify-content-center align-items-center">
                        <Telegram/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footline"></div>
      <div className="container">
        <p className="text-white font-outfit fs-14 opacity-60 lh-15 fw-normal mb-0 text-center py-14">© {year} Cloopp</p>
      </div>
    </div>
  );
};

export default Footer;
