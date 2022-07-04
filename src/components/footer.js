import * as React from "react";
import email from "../images/email.svg";
import wechat from "../images/wechat.svg"
import whatsapp from "../images/whatsapp.svg"

const Footer = () => {
  return (
  <footer className="footer-container">
    <div className="contact-title">Contacto / 聯繫方式 / Contact</div>
      <div className="contact-lists-container">
        <ul className="contact-list">
        <a href="mailto:commercial@14deagosto.com"><li><img className="contact-img" src={email}/><span>&nbsp;&nbsp;commercial@14deagosto.com</span></li></a>
        <a href=""><li><img className="contact-img" src={wechat}/><span>&nbsp;&nbsp;微信IDSA14DeAgosto</span></li></a>
        </ul>
        <ul className="contact-list">
          <a href={`https://wa.me/${85254968041}`}><li><img className="contact-img" src={whatsapp}/><span>&nbsp;+85254968041</span></li></a>
          <a href={`https://wa.me/${5491127163700}`}><li><img className="contact-img" src={whatsapp}/><span>&nbsp;+5491127163700</span></li></a>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;