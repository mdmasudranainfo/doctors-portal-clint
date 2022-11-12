import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const ServicesData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      disc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      image: whitening,
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center my-5">
        <p className="text-primary font-semibold">OUR SERVICES</p>
        <h2 className="text-3xl	 font-semibold">Services We Provide</h2>
      </div>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {ServicesData.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
