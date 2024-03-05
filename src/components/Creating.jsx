import React from "react";
import mobile from "../assets/images/mobile.webp";
import ellipse from "../assets/images/Creatingellipse.webp";
const myArray = [
  {
    num: 1,
    head: "Scan The Barcode Before Recycling",
    para: "Open Cloopp, scan the product's barcode, and rack up points with every item you keep out of the landfill.",
  },
  {
    num: 2,
    head: "Get Paid For Products You Use",
    para: "Get rewarded for doing the right thing. Your daily items – from plastics to cardboard and beyond – are connected to the Cloopp App.",
  },
  {
    num: 3,
    head: "Reap The Rewards",
    para: "Earn exclusive coupons, promo codes, and cashback from the hottest brands and track your environmental impact.",
    class: "mb-0 ",
    text: "max-w-480",
  },
];
const cards = myArray.map((myArray, i) => (
  <div className={`mb-4 ${myArray.class}`} key={i} data-aos="fade-left">
    <div className="d-flex justify-content-center d-lg-block">
      <div className="circle1 d-flex justify-content-center align-items-center mb-20">
        <span className="text-yellow fs-32 font-outfit fw-semibold lh-35 text-center">
          {myArray.num}
        </span>
      </div>
    </div>
    <h4 className=" font-outfit text-baseblack fs-24 fw-medium lh-30 mb-10 text-center text-lg-start">
      {myArray.head}
    </h4>
    <p
      className={`fs-16 text-baseblack font-outfit lh-24 fw-normal mb-0 max-w-501 text-center text-lg-start opacity-80 mx-auto mx-lg-0 ${myArray.text}`}
    >
      {myArray.para}
    </p>
  </div>
));
const Creating = () => {
  return (
    <div className="bg-white position-relative z-1" id="create">
      <div className="container">
        <h2 className="fs-52 text-baseblack my-5  text-center font-outfit fw-semibold">
          Creating a Greener World Is{" "}
          <span className="d-block">Now As Easy As 1-2-3</span>
        </h2>
        <div className="row justify-content-around">
          <div className="col-lg-4 my-auto d-flex justify-content-center">
            <img src={mobile} alt="mobile" className="w-lg-100" />
          </div>
          <div className="col-lg-6">{cards}</div>
        </div>
      </div>
      <img
        src={ellipse}
        alt="elp"
        className="creatingellipse d-none d-md-block"
      />
    </div>
  );
};

export default Creating;
