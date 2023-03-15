import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/zildjianvito/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="wa.me/6285155470477">
          <IoLogoWhatsapp />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com">
          <BsInstagram size={"2em"} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
