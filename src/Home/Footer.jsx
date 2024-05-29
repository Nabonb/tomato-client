import React from "react";
import { assets } from "../assets/images/assets";

// linkedin_icon,
//     facebook_icon,
//     twitter_icon,

const Footer = () => {
  return (
    <>
      <footer id="contact-us" className="footer p-10 bg-neutral text-neutral-content grid md:grid-cols-4">
        <nav className="col-span-2">
          <a className="link link-hover">
            <img src={assets.logo} alt="" />
          </a>
          <p className="my-8">
            Indulge in culinary delights with our curated selection of gourmet
            recipes and cooking tips. Discover mouth-watering dishes and elevate
            your home dining experience with our easy-to-follow guides. Explore
            now and transform your kitchen into a chef's paradise!
          </p>
          <div className="flex justify-between gap-4">
            <img className="w-8 h-8" src={assets.facebook_icon} alt="" />
            <img className="w-8 h-8" src={assets.linkedin_icon} alt="" />
            <img className="w-8 h-8" src={assets.twitter_icon} alt="" />
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Delivery</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Get In Touch</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by nabonb</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
