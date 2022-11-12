import React from "react";

const Service = ({ service }) => {
  const { title, disc, image } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default Service;
