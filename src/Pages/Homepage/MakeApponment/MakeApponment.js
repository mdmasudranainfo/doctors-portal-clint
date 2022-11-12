import React from "react";
import image from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeApponment = () => {
  return (
    <div
      className="hero mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero-content pb-0 flex-col lg:flex-row text-white">
        <img
          alt=""
          src={image}
          className="lg:w-1/2 lg:block hidden rounded-lg -mt-32"
        />
        <div>
          <p className="text-primary">Appointment</p>
          <h1 className="text-3xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary mb-2 text-white bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeApponment;
