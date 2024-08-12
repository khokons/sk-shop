import React from "react";
import exclusive from "../../../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="hero md:max-w-[80%] mx-auto gradient-bg min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={exclusive} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold text-black">Exclusive <br /> Offers For you</h1>
          <p className="py-6 text-sm md:text-3xl text-white font-poppins font-medium">
          ONLY ONE BEST SELLERS <br /> PRODUCT


          </p>
          <button className="btn gradient-btn">Check Now</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
