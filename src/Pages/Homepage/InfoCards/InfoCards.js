import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Opening Hours",
      disc: "Lorem Ipsum is simply dummy text of the pri",
      bgColor: "bg-gradient-to-r from-primary to-secondary",
      image: clock,
    },
    {
      id: 2,
      title: "Visit our location",
      disc: "Brooklyn, NY 10036, United States",
      bgColor: "bg-neutral",
      image: marker,
    },
    {
      id: 3,
      title: "Contact us now",
      disc: "+000 123 456789",
      bgColor: "bg-gradient-to-r from-primary to-secondary",
      image: phone,
    },
  ];
  return (
    <div className="grid gap-6 mt-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
      {cardInfo.map((card) => (
        <InfoCard card={card} key={card.id}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
