import React from "react";
import scan from "../assets/images/scan.webp";
import { Earth, Tag, Thumb } from "./Icon";
import toplayer from '../assets/images/recyclelayer1.webp'
import bottomlayer from '../assets/images/recyclelayer2.webp'
const Recycling = () => {
  return (
    <div className="bg-blue pt-271 position-relative overflow-x-clip z-1 mb--1 mt--1" id="recycling">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 pb-lg-200 ">
            <h2 className=" font-outfit fs-52 text-white lh-62 fw-semibold mb-40 text-center text-lg-start" data-aos="fade-right">
              Recycling Has Never Been This Easy and Rewarding
            </h2>
            <div className="accordion " id="accordionExample">
              <div className="accordion-item mb-md-4 mb-sm-3 mb-2 bg-transparent mx-auto mx-lg-0 " data-aos="fade-right">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button bg-transparent d-flex align-items-center gap-20"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span>
                      <Tag />
                    </span>
                    <span className="text-white font-outfit fs-24 fw-medium lh-30">
                      Exclusive Coupons & Rewards
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse bg-transparent collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white font-outfit fs-16 fw-normal lh-24 opacity-90 pl-80 pt-0">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-md-4 mb-sm-3 mb-2 bg-transparent mx-auto mx-lg-0" data-aos="fade-left">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent d-flex align-items-center gap-20"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <Earth />
                    </span>
                    <span className="text-white font-outfit fs-24 fw-medium lh-30">
                      Track Your Environmental Impact
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white font-outfit fs-16 fw-normal lh-24 opacity-90 pl-80 pt-0">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-transparent mx-auto mx-lg-0" data-aos="fade-right">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed bg-transparent d-flex align-items-center gap-20"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span>
                      <Thumb />
                    </span>
                    <span className="text-white font-outfit fs-24 fw-medium lh-30">
                      Feel Good
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white font-outfit fs-16 fw-normal lh-24 opacity-90 pl-80 pt-0">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 pt-5 pt-lg-0" data-aos="zoom-in">
            <img src={scan} alt="scan" className="w-lg-100" />
          </div>
        </div>
      </div>
      <img src={toplayer} alt="layer" className="recycletoplayer" />
      <img src={bottomlayer} alt="layer" className="recyclebottomlayer" />
    </div>
  );
};

export default Recycling;
