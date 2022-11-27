import React from 'react';
import './shippingdesc.css'

function Shippingdesc(){
    return(
        <div className="shippingdesc">
            <div className="shippingdesc__inner">
                <div className="shippingdesc__inner__shippingbox">
                    <span className="shippingdesc__inner__shippingbox-title">SHIPPING</span>
                    <span className="shippingdesc__inner__shippingbox-standard">Standard &nbsp Free</span>
                    <span className="shippingdesc__inner__shippingbox-standardtime">6-8 days</span>                    
                    <span className="shippingdesc__inner__shippingbox-express">Express &nbsp $9.99</span>
                    <span className="shippingdesc__inner__shippingbox-expresstime">2-4 business days</span>
                    <span className="shippingdesc__inner__shippingbox-viewall">view all options</span>
                </div>
                <div className="shippingdesc__inner__returnbox">
                    <span className="shippingdesc__inner__returnbox-title">RETURNS / EXCHANGE</span>
                    <span className="shippingdesc__inner__returnbox-titledesc">Fast easy returns</span>
                    <span className="shippingdesc__inner__returnbox-returns">Returns</span>
                    <span className="shippingdesc__inner__returnbox-returnstime">within 60 days</span>
                    <span className="shippingdesc__inner__returnbox-exchanges">Exchanges</span>
                    <span className="shippingdesc__inner__returnbox-exchangestime">within 60 days</span>
                    <span className="shippingdesc__inner__returnbox-visit">visit our customer care area</span>
                    <span className="shippingdesc__inner__returnbox-more">for more information on returns, exchanges and refunds</span>
                </div>
            </div>
        </div>


    );
}

export default Shippingdesc;