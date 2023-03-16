import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = (props) => {
  return (
    <div className={`app__social ${props.className}`}>
      <div>
        <a href="https://www.linkedin.com/in/zildjianvito/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://wa.me/6285155470477">
          <IoLogoWhatsapp />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
