import React from "react";

const Testimail = ({ review }) => {
  const { name, commnet, location, image } = review;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{commnet}</p>
        <div className="card-actions mt-4 justify-start align-middle">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="" className="" src={image} />
            </div>
          </div>
          <div className="ml-3">
            <h4 className="text-2xl font-semibold">{name}</h4>
            <p className="font-semibold">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimail;
