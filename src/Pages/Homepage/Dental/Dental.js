import React from "react";
import image from "../../../assets/images/treatment.png";

const Dental = () => {
  return (
    <div className="card mt-36 lg:card-side md:card-side bg-base-100">
      <figure>
        <img src={image} alt="Movie" className="lg:w-1/2 p-4" />
      </figure>
      <div className="card-body lg:w-1/2 md:w-1/2 w-ful">
        <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
        <p className="m-[0px] p[0px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
          <button className="btn btn-primary block mt-4 text-white bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </p>
      </div>
    </div>
  );
};

export default Dental;
