import React, { useState } from 'react';
import './logmodal.css'

function Logmodal(){
    const[logMode, setLogMode]= useState(true)

    function setLog(){
        setLogMode(true);
    }

    function setReg(){
        setLogMode(false);
    }


    function regView(){
        return(
            <div className="regmodal">
                <div className="regmodal__inner">
                    <div className="regmodal__inner__idbox">
                        <div className="regmodal__inner__signbox">
                            <span onClick={setLog}>SIGN IN</span>
                            <div className="regmodal__inner__signbox-sign"></div>
                        </div>
                        <div className="regmodal__inner__regbox">
                            <span onClick={setReg}>REGISTER</span>
                            <div className="regmodal__inner__regbox-reg"></div>
                        </div>
                    </div>
                    <input className="regmodal__inner-topinp" type="text" placeholder="First name"></input>
                    <input className="regmodal__inner-inp" type="text" placeholder="Last name"></input>
                    <input className="regmodal__inner-inp" type="text" placeholder="Email"></input>
                    <input className="regmodal__inner-inp" type="text" placeholder="Password"></input>
                    <input className="regmodal__inner-inp" type="text" placeholder="Confirm Password"></input>
                    <button className="regmodal__inner-register">REGISTER</button>
                    <div className="regmodal__inner-terms">By continuing, you agree to our terms and condition &amp; privacy policy</div>
                </div>
            </div>
        );
    }

    function logView(){
    return(
        <div className="logmodal">
            <div className="logmodal__inner">
                <div className="logmodal__inner__idbox">
                    <div className="logmodal__inner__idbox__signbox">
                        <span onClick={setLog}>SIGN IN</span>
                        <div className="logmodal__inner__idbox__signbox-signin"></div>
                    </div>
                    <div className="logmodal__inner__idbox__regbox">
                        <span onClick={setReg}>REGISTER</span>
                        <div className="logmodal__inner__idbox__regbox-reg"></div>
                    </div>
                </div>
                <input className="logmodal__inner-email" type="text" placeholder="Email"></input>
                <input className="logmodal__inner-password" type="text" placeholder="Password"></input>
                <div className="logmodal__inner-forgot">Forgot Password</div>
                <button className="logmodal__inner-signbutton">SIGN IN</button>
                <div className="logmodal__inner__checkbox">
                    <input type="checkbox"></input>
                    <span className="logmodal__inner__checkbox-copy">Keep me signed in</span>
                </div>
                <div className="logmodal__inner-terms">By continuing, you agree to our terms and condition &amp; privacy policy</div>
            </div>
        </div>
    );
    }


    if(logMode == true)
    {
        return logView();
    }
    else{
        return regView();
    }
}

export default Logmodal;