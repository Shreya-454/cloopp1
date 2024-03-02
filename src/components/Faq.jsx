import React from "react";
import ellipse from '../assets/images/faqellipse.webp'
const Faq = () => {
  return (
    <div className="bg-white pt-36 pb-5 position-relative z-1" id="Faq">
      <div className="container">
        <h2 className="fs-52 font-outfit text-baseblack text-center fw-semibold lh-62 mb-40" data-aos="zoom-in-up">
          Frequently Asked Questions
        </h2>
        <div class="accordion accordion-flush max-w-957 mx-auto" id="accordionFlushExample">
          <div class="accordion-item mb-md-3 mb-2"  data-aos="fade-right">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div class="accordion-item mb-md-3 mb-2" data-aos="fade-left">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div class="accordion-item mb-md-3 mb-2" data-aos="fade-right">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
              You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="fade-left">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed font-outfit bg-transparent  text-baseblack fw-medium lh-30"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body bg-transparent text-baseblack opacity-80 font-outfit fs-16 max-w-810">
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
