import React from "react";
import "../Styles/Components/SocialMedia.scss";
import { ReactComponent as TwitterSvg } from "../assets/twitter.svg";
import { ReactComponent as SvgFacebook } from "../assets/facebook.svg";
import { ReactComponent as SvgInstagram } from "../assets/instagram.svg";

const SocialMedia = () => {
  return (
    <nav className="social-media">
      <a href="/" title="twitter">
        <TwitterSvg />
      </a>
      <a href="/" title="facebook">
        <SvgFacebook />
      </a>
      <a href="/">
        <SvgInstagram title="instagram" />
      </a>
    </nav>
  );
};

export default SocialMedia;
