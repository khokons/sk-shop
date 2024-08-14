import React from "react";
import star_icon from "../../../assets/star_icon.png";
import star_dull_icon from "../../../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col lg:flex-row my-12">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex lg:flex-col gap-3">
          <img className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[100px] lg:w-[150px]" src={product.image} alt="" />
          <img className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[100px] lg:w-[150px]" src={product.image} alt="" />
          <img className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[100px] lg:w-[150px]" src={product.image} alt="" />
          <img className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[100px] lg:w-[150px]" src={product.image} alt="" />
        </div>
        <div>
          <img className="h-[300px] w-full md:h-[436px] md:w-[300px] lg:h-[436px] lg:w-[300px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-8 lg:mt-0 lg:ml-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">{product.name}</h1>
        <div className="flex items-center gap-1 mt-4">
          <img className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" src={star_icon} alt="" />
          <img className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" src={star_icon} alt="" />
          <img className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" src={star_icon} alt="" />
          <img className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" src={star_icon} alt="" />
          <img className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" src={star_dull_icon} alt="" />
          <p className="gradient-text font-extrabold text-sm md:text-base lg:text-lg">122</p>
        </div>

        <div className="flex gap-4 my-5 text-base md:text-lg lg:text-xl">
          <div className="line-through">${product.old_price}</div>
          <div className="text-red-400">${product.new_price}</div>
        </div>
        <div>
          <p className="w-full md:w-[400px] lg:w-[500px] mx-auto text-sm md:text-base lg:text-lg text-yellow-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex deserunt ab consequuntur a velit laboriosam cumque saepe autem? Nulla, quaerat.
          </p>
        </div>
        <div className="mt-5">
          <h1 className="gradient-text-2 text-sm md:text-xl lg:text-2xl">Select Size</h1>
          <div className="flex gap-5 my-6">
            <div className="py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-8 border border-solid cursor-pointer gradient-btn">
              S
            </div>
            <div className="py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-8 border border-solid cursor-pointer gradient-bg">
              M
            </div>
            <div className="py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-8 border border-solid cursor-pointer gradient-btn">
              L
            </div>
            <div className="py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-8 border border-solid cursor-pointer gradient-bg-2">
              XL
            </div>
            <div className="py-2 px-4 md:py-3 md:px-6 lg:py-5 lg:px-8 border border-solid cursor-pointer gradient-btn">
              XXL
            </div>
          </div>
        </div>

        <button className="px-5 py-2 md:px-10 md:py-4 lg:px-10 lg:py-5 w-full md:w-48 text-base font-semibold mb-10 border-none outline-none cursor-pointer gradient-bg text-black">
          ADD TO CART
        </button>
        <p className="text-sm md:text-base lg:text-xl gradient-text-2 mt-4">
          <span className="font-bold">Category:</span> Women, Crop Top
        </p>
        <p className="text-sm md:text-base lg:text-xl gradient-text-2 mt-2">
          <span className="font-bold">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
