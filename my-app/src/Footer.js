import React, { Component } from 'react';
import Facebook from "./icons8-facebook-64.png";
import Instagram from "./icons8-instagram-64.png";
import Bus from "./logo_bemidjibus.png";
import Logo from "./logo-footer_mk.png";

class Footer extends Component {
  render() {
      return(
        <footer className="footer-distributed">
 
 <div className="footer-left">

 <h3>Vozen<span>Red</span></h3>

 <p className="footer-links">
 ·<a href="#">Home</a>

<br/>
·<a href="#">Blog</a>

<br/>
·<a href="#">Pricing</a>

<br/>
·<a href="#">About</a>

<br/>
·<a href="#">Faq</a>

<br/>
·<a href="#">Contact</a>
 </p>

 <p className="footer-company-name">Дипломска Работа 	&reg; 2019</p>
 </div>

 <div className="footer-center">

 <div>
 <i className="fa fa-map-marker"></i>
 <p> Северна Македонија</p>
 </div>

 <div>
 <i className="fa fa-phone"></i>
 <p>+389 (0)2 2123 342</p><br/>
 <p>Факс: +389 (0)2 2402 385</p>
 </div>

 <div>
 <i className="fa fa-envelope"></i>
 <p><a href="mailto:vozenredsmk@hotmail.com?Subject=Hello%20again">vozenredsmk@hotmail.com</a></p>
 </div>
<img src={Logo} className="LogoFooter"></img>


 </div>

 <div className="footer-right">

 <p className="footer-company-about">
 <span>За нас</span>
Возен ред им помага на луѓето да ги пребаруваат сите возни линии низ Република Северна Македонија
 </p>

 <div className="footer-icons">

 <a href="https://www.facebook.com"><i><img src={Facebook} className="facebook"></img></i></a> &nbsp;
 <a href="https://www.instagram.com"><i><img src={Instagram} className="instagram"></img></i></a>
 

 </div>
 <div className="footer-picture">
 <img src={Bus} className="MiniBus"></img>

 </div>

 </div>

 </footer>


      )
  }
}



export default Footer;
