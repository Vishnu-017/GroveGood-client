import React from "react";

import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const iconS =
  "text-secondary hover:text-primary transition duration-200 ease-in-out cursor-pointer h-5 w-5";

export const ProductItemShare = () => {
  return (
  <div>
    <div className="flex space-x-6 px-3 ">
      <div className="flex space-x-6 px-3 ">
      <div>
          <textarea style={{ border:"2px solid black"}} placeholder=" Enter your feedback here..." name="" id="" cols="50" rows="5"></textarea>
      </div>
    </div>
    </div>
    <br />
    <div className="flex mx-3 space-x-5 px-2">
    <FaFacebookF className={`${iconS}`} />
    <FaTwitter className={`${iconS}`} />
    <FaPinterest className={`${iconS}`} />
   </div>
   </div>
  );
};
