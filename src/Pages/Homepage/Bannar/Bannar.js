import React from "react";
import cheir from "../../../assets/images/chair.png";
const Bannar = () => {
  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={cheir}
          className=" rounded-lg lg:w-1/2 w-full shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
