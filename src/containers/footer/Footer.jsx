import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const FooterLinks = ({ subtitle, link }) => {
  return (
    <>
      <h4>{subtitle}</h4>
      {link.map((linkData, index) => {
        return <p key={index}>{linkData}</p>;
      })}
    </>
  );
};

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>

      <div className="gpt3__footer-links_div">
        <FooterLinks
          subtitle="Links"
          link={["Overons", "Social Media", "Counters", "Contact"]}
        />
      </div>

      <div className="gpt3__footer-links_div">
        <FooterLinks
          subtitle="Company"
          link={["Terms & Conditions", "Privacy Policy", "Contact"]}
        />
      </div>

      <div className="gpt3__footer-links_div">
        <FooterLinks
          subtitle="Get in touch"
          link={["Kathmandu K12 182 DK 99", "9828172288", "info@payMe.net"]}
        />
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
