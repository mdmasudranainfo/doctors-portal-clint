import React from "react";

const InfoCard = ({ card }) => {
  const { title, disc, bgColor, image } = card;
  console.log(image);
  return (
    <div className={`card lg:card-side p-4 text-white shadow-xl ${bgColor}`}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
