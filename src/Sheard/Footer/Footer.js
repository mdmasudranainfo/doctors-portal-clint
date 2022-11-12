import React from "react";
import image from "../../assets/images/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
      }}
      className=" p-10 bg-neutral text-neutral mt-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="text-center my-8">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
