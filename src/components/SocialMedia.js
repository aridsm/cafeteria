import React from "react";
import "../Styles/Components/SocialMedia.scss";
import { ReactComponent as TwitterSvg } from "../assets/twitter.svg";
import { ReactComponent as SvgFacebook } from "../assets/facebook.svg";
import { ReactComponent as SvgInstagram } from "../assets/instagram.svg";

const SocialMedia = () => {
  return (
    <nav className="social-media">
      <a href="/">
        <TwitterSvg />
      </a>
      <a href="/">
        <SvgFacebook />
      </a>
      <a href="/">
        <SvgInstagram />
      </a>
    </nav>
  );
};

export default SocialMedia;
