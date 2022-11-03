import React from "react";
import whats from "../assets/svg/whats.svg";
import email from "../assets/svg/email.svg";
import phone from "../assets/svg/phone.svg";

export default function SubNavCompoent() {
  return (
    <>
      <div className="sub_nav">
        <div className="sub_nav_info">
          <strong>HELP DESK: </strong>
          <a href="tel: 00351968317170" rel="noreferrer">
            +351968317170
          </a>
          <img src={phone} alt="phone_svg" />
        </div>

        <div className="sub_nav_info">
          <strong>SEND MESSAGE: </strong>
          <a href="https://wa.me/351968317170" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <img src={whats} alt="whats_app_svg" />
        </div>

        <div className="sub_nav_info">
          <strong>EMAIL: </strong>
          <a href="mailto: info@alltravel.pt">info@alltravel.pt</a>
          <img src={email} alt="email_svg" />
        </div>
      </div>
    </>
  );
}
