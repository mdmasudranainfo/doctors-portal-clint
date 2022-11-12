import React from "react";
import Bannar from "../Bannar/Bannar";
import Dental from "../Dental/Dental";
import InfoCards from "../InfoCards/InfoCards";
import MakeApponment from "../MakeApponment/MakeApponment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Bannar></Bannar>
      <InfoCards></InfoCards>
      <Services></Services>
      <Dental></Dental>
      <MakeApponment></MakeApponment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
