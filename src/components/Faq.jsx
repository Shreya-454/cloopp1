import React from "react";
import ellipse from '../assets/images/faqellipse.webp'
const Faq = () => {
  return (
    <div className="bg-white pt-4 pb-lg-5 pb-4 position-relative z-1" id="Faq">
      <div className="container">
        <h2 className="fs-52 font-outfit text-baseblack text-center fw-semibold lh-62 mb-40" data-aos="zoom-in-up">
          Frequently Asked Questions
        </h2>
        <div className="accordion accordion-flush max-w-957 mx-auto" id="accordionFlushExample">
          <div className="accordion-item mb-md-3 mb-2"  data-aos="fade-right">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
          What products can I scan?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div className="accordion-item mb-md-3 mb-2" data-aos="fade-left">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
              Where can I use my rewards?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div className="accordion-item mb-md-3 mb-2" data-aos="fade-right">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
             What kind of impact can I make?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="fade-left">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
              Which brands do you partner with?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={ellipse} alt="e" className="faqellipse d-none d-lg-block" />
    </div>
  );
};

export default Faq;
