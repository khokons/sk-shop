import hero from "../../../assets/hero_image.png";

import { FaArrowRight } from "react-icons/fa6";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={hero}
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Arrivals only
                </h1>
                <h2 className="py-4 md:py-8 text-4xl md:text-7xl font-medium lowercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Collection <br /> For Everyone
                </h2>
                <button className="btn btn-primary capitalize text-black bg-gradient-to-r from-red-500 to-yellow-500">
                  Latest Collection <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.postimg.cc/250H9fq3/khokon-removebg-preview.png"
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Arrivals only
                </h1>
                <h2 className="py-4 md:py-8 text-4xl md:text-7xl font-medium lowercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Collection <br /> For Everyone
                </h2>
                <button className="btn btn-primary capitalize text-black bg-gradient-to-r from-red-500 to-yellow-500">
                  Latest Collection <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.postimg.cc/Qx5z4K40/file.png"
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
              <div>
                <h1 className="text-3xl md:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Arrivals only
                </h1>
                <h2 className="py-4 md:py-8 text-4xl md:text-7xl font-medium lowercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">
                  New Collection <br /> For Everyone
                </h2>
                <button className="btn btn-primary capitalize text-black bg-gradient-to-r from-red-500 to-yellow-500">
                  Latest Collection <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
