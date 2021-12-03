import React from "react";
import footerImg from "./img/akonate.png";
function Footer() {
  return (
    
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <img src={footerImg} alt="" className="footer__img pointer" />
                       
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer KONATE Aissata.
      </span>
      <div className="footer d__flex align__items__center justify__content__space__between pz-10">
                    <h2 className="footer__title">Suivez-moi</h2>
                    <a href="https://www.facebook.com/" className="footer__social" target="_blank">
                      <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://www.instagram.com/aissatakonate/" className="footer__social" target="_blank">
                      <i className='fa fa-instagram' ></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aissata-konate-aa08b2194/" className="about__social-icon" target="_blank">
                      <i class='fa fa-linkedin' ></i></a>
      </div>
    </div>
    
  );
}

export default Footer;
