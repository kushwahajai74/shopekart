import React from "react";
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore } alt="playstore" />
            <img src={appStore } alt="appstore" />
        </div>
        <div className="midFooter">
            <h1>shopEkart</h1>
            <p>High Quality is our priority</p>
            <p>Copyrights 2023 &copy; Jai Ksshwaha</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://">Instagram</a>
            <a href="http://">LinkedIn</a>
            <a href="http://">Twitter</a>

        </div>
    </footer>
  )
};

export default Footer;
