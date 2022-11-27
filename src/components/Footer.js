import React from 'react';
import './footer.css'

import apIco from '../assets/PayMethods/afterpay_new-png.webp';
import amexIco from '../assets/PayMethods/amex.webp';
import appleIco from '../assets/PayMethods/apple-pay-png.webp';
import klarnaIco from '../assets/PayMethods/klarna-gb-png.webp';
import maestroIco from '../assets/PayMethods/maestro-png.webp';
import mcIco from '../assets/PayMethods/mastercard-png.webp';
import ppIco from '../assets/PayMethods/pay-pal-png.webp';
import visaeIco from '../assets/PayMethods/visa-electron-png.webp';
import visaIco from '../assets/PayMethods/visa-png.webp';
 
           
function Footer(){
    return(
    <div className="footer">
        <div className="footer__inner     --w100 --f-col-align">
            <div className="footer__inner__heading    footer-box --f-centered">
                <span className="footer__inner__heading-copy     --mtb-f30">Free Shipping, Free Returns* Online & In-Store.</span>
            </div>
            <div className="footer__inner__body   text-box --mt-f20 --f-row">
                <div className="footer__inner__body__left   --qrtr --f-centered">
                    <div className="footer__inner__body__left__box      footer__copy-box  --f-col --fnt-mon-r">
                        <span className="footer__inner__body__left__box-help       --margin-btm footer__h1-fnt">Help</span>
                        <ul className="footer__inner__body__left__box-list     footer-list --fnt-f12">
                            <li>Call Us at ***-***-****</li>
                            <li>Email Us</li>
                            <li>My Account</li>
                            <li>Track My Order</li>
                            <li>Returns & Exchanges</li>
                            <li>Pay My Credit Card</li>
                            <li>Gift Cards</li>
                            <li>Neiman Marcus Group</li>                        
                        </ul>
                    </div>
                </div>
                <div className="footer__inner__body__middle    --qrtr --f-centered">
                    <div className="footer__inner__body__middle__box    footer__copy-box  --f-col --fnt-mon-r">
                        <span className="footer__inner__body__middle__box-offering     --margin-btm footer__h1-fnt">Our Offerings</span>
                        <ul className="footer__inner__body__middle__box-list      footer-list --fnt-f12">
                            <li>Women's Store</li>
                            <li>Men's Store</li>
                            <li>Our Restaurants</li>
                            <li>Store Services</li>
                            <li>Book A Store Appointment</li>
                            <li>Same-Day Delivery</li>
                            <li>MOOX Credit Card</li>                                         
                        </ul>
                    </div>
                </div>
                <div className="footer__inner__body__right      --half --f-centered">   
                    <div className="footer__inner__body__right__box    footer__copy-box --f-col">
                        <div className="footer__inner__body__right__box__email       --wide --fnt-mon-r footer__h1-fnt">
                            <span>Sign up for Emails and receive 10% off your first purchase:</span>
                            <div className="footer__inner__body__right__box__email__box       email-box">
                                <input className="footer__inner__body__right__box__email__box-input       input-fld" type="text" id="fname" placeholder="Enter Email"></input>                         
                                <button type="button"  className="footer__inner__body__right__box__email__box-btn      btn sub-btn --fnt-w" >Submit</button> 
                            </div>
                        </div>
                        <div className="footer__inner__body__right__box__payments     --wide --mt-f30">
                            <span>MOOX Accepts</span>
                            <div className="footer__inner__body__right__box__payments-icons    --w100 --f-row --f-wrap">
                                <img src={apIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={amexIco} className="footer_pay-icon    pay-img" alt=""></img>                            
                                <img src={appleIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={klarnaIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={maestroIco} className="footer_pay-icon   pay-img" alt=""></img>
                                <img src={mcIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={ppIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={visaeIco} className="footer_pay-icon    pay-img" alt=""></img>
                                <img src={visaIco} className="footer_pay-icon     pay-img" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>       
    </div>
    );
}

export default Footer;