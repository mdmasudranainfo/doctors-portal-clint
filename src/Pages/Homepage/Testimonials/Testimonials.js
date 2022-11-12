import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimail from "./Testimail";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      image: people1,
      commnet:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      image: people2,
      commnet:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      image: people3,
      commnet:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="mt-28">
      <div className="">
        <h5 className="text-2xl text-primary font-semibold">Testimonial</h5>
        <h1 className="text-4xl font-semibold mt-5">What Our Patients Says</h1>
      </div>
      <div className="grid gap-5 mt-40 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        {reviews.map((review) => (
          <Testimail review={review} key={review.id}></Testimail>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
