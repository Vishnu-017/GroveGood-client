import React, { useEffect } from "react";

import Button from "../../../components/Button";
import { aboutUsImages } from "../../../assets/home/aboutUs/aboutUsImages";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrImg } from "../../../features/customer/slider/sliderSlice";

const AboutUs = () => {
  const dispatch = useDispatch();
  const { currImg } = useSelector((store) => store.slider);

  const slideNext = () => {
    // currImg < aboutUsImages.length - 1
    //   ? dispatch(setCurrImg({ currImg: currImg + 1 }))
    //   : dispatch(setCurrImg({ currImg: 0 }));

    currImg === aboutUsImages.length - 1
      ? dispatch(setCurrImg({ currImg: 0 }))
      : dispatch(setCurrImg({ currImg: currImg + 1 }));
  };

  const slidePrevious = () => {
    // currImg > 0
    //   ? dispatch(setCurrImg({ currImg: currImg - 1 }))
    //   : dispatch(setCurrImg({ currImg: aboutUsImages.length - 1 }));

    currImg === 0
      ? dispatch(setCurrImg({ currImg: aboutUsImages.length - 1 }))
      : dispatch(setCurrImg({ currImg: currImg - 1 }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      slideNext();
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <section className="flex w-full items-center bg-[#ffffff] md:min-h-screen">
      <div className="container mx-auto py-16 px-6 lg:px-16 lg:pb-16 lg:pt-0">
        {/* grid container */}
        <div className="flex flex-col-reverse items-center justify-center gap-20 md:flex-row">
          {/* text div */}
          <div className="col-span-2 w-full space-y-4">
            <p className="text-base font-bold text-secondary md:text-xl">
              ABOUT US
            </p>

            <div className="space-y-5 md:space-y-8">
              <h6 className="font-gotu text-4xl font-bold text-primary md:text-5xl lg:text-4xl">
              Organic Junction - GroveGood
              </h6>

              <p className="text-base text-secondary md:text-lg">
              Welcome to <b>GroveGood</b>, your ultimate destination for organic products, where we aim to <i>reconnect you 
              with Nature's Goodness</i>. Our diverse range of organic items is carefully curated to <i>elevate health 
              standards and enrich your lifestyle</i>. Explore our collection with confidence, as each product is 
              selected and presented with utmost authenticity. At GroveGood, organic isn't just a word; it's a 
              steadfast commitment we renew daily to bring you the best of nature's bounty.
              </p>


              <Button
                navigateTo="/about"
                btnStyle="btn-primary"
                text="Brand Story"
              />
            </div>
          </div>

          {/* img div */}
          <div className="col-span-3 h-72 w-full space-y-4 md:h-[500px] md:space-y-7">
            {/* img */}
            <div className="h-full w-full overflow-hidden shadow-lg md:shadow-xl">
              <Link to={`/products`}>
                <div
                  style={{
                    backgroundImage: `url(${aboutUsImages[currImg].img2})`,
                  }}
                  className="h-full w-full bg-cover bg-center duration-700"
                ></div>
              </Link>
            </div>

            {/* button */}
            <div className="flex justify-center space-x-6">
              <div onClick={slidePrevious}>
                <AiOutlineArrowLeft className="h-6 w-6 cursor-pointer rounded-full bg-zinc-900/40 p-1 text-white/80 transition duration-300 ease-in hover:scale-105 hover:bg-zinc-900/60 md:h-7 md:w-7" />
              </div>

              <div className="flex items-center space-x-3">
                {aboutUsImages.map((item) => (
                  <GoPrimitiveDot
                    key={item.id}
                    onClick={() => dispatch(setCurrImg({ currImg: item.id }))}
                    className={
                      item.id === currImg
                        ? "h-5 w-5 scale-125 cursor-pointer text-primary/70 transition duration-300 ease-in hover:scale-125"
                        : "h-5 w-5 cursor-pointer text-secondary/40 transition duration-300 ease-in hover:scale-125"
                    }
                  />
                ))}
              </div>

              <div onClick={slideNext}>
                <AiOutlineArrowRight className="h-6 w-6 cursor-pointer rounded-full bg-zinc-900/40 p-1 text-white/80 transition duration-300 ease-in hover:scale-105 hover:bg-zinc-900/60 md:h-7 md:w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
