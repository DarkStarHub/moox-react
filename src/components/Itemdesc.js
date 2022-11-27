import React from 'react';
import './itemdesc.css'

function Itemdesc(){
    return(
        <div className="itemdesc">
            <div className="itemdesc__inner">
                <div className="itemdec__inner__left">
                    <div className="itemdec__inner__left__madebox">
                        <h1 className="itemdec__inner__left__madebox-title">MADE IN ITALY</h1>
                        <h2 className="itemdec__inner__left__madebox-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                    <div className="itemdec__inner__left__compbox">
                        <h1 className="itemdec__inner__left__compbox-title">composition</h1>
                        <h2 className="itemdec__inner__left__compbox-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    </div>
                    <div className="itemdec__inner__left__measurebox">
                        <h1 className="itemdec__inner__left__measurebox-title">MEASUREMENTS</h1>
                        <h2 className="itemdec__inner__left__measurebox-copy">Lorem ipsum dolor sit amet.</h2>
                    </div>
                </div>
                <div className="itemdec__inner__right">
                    <h1 className="itemdec__inner__right-title">DETAILS</h1>
                    <h2 className="itemdec__inner__right-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                </div>
            </div>
        </div>
    );
}

export default Itemdesc;