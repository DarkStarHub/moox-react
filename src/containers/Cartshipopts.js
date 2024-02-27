import React from 'react';
import Linebreak from '../components/Linebreak';
import './cartshipopts.css'
import youTube from '../assets/SocialIcons/Youtube@svg.svg'; 
import ig from '../assets/SocialIcons/Instagram@svg.svg';                
import pint from "../assets/SocialIcons/Pinterest@svg.svg";
import twit from "../assets/SocialIcons/Twitter@svg.svg";                 
import fb from "../assets/SocialIcons/Facebook@svg.svg";




function Cartshipopts(props){  

   


    return(
    <div className="cartship">
        <div className="cartship__inner">
            <div className="cartship__inner__opts">
                <div className="cartship__inner__opts__offerbox ">
                    <span>10% OFF WHEN YOU SIGN UP</span>
                    <span className="cartship__inner__opts__offerbox-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>               
                </div>
                <div className="cartship__inner__opts__selectbox">
                    <span>SELECT SHIPPING METHOD</span>
                    <form className="cartship__inner__opts__selectbox__form" id="shipGID">
                        &nbsp; <input type="radio" id="standard" name="shipGroup" value={props.curState === 0}  onChange={() => props.shipState(0)} defaultChecked={true}></input>
                        &nbsp; <label htmlFor="standard">STANDARD &nbsp; &nbsp; FREE</label>                        
                            <br/>                      
                        &nbsp; <input className="cartship__inner__opts__selectbox__form-opt" type="radio" id="express" name="shipGroup" value={props.curState === 9.99} onChange={() => props.shipState(9.99)}></input>
                        &nbsp; <label htmlFor="express">EXPRESS &nbsp; &nbsp; &nbsp; &nbsp; $9.99</label>                    
                            <br/>
                        &nbsp; <input className="cartship__inner__opts__selectbox__form-opt" type="radio" id="overnight" name="shipGroup" value={props.curState === 19.99} onChange={() => props.shipState(19.99)}></input>
                        &nbsp; <label htmlFor="overnight">OVERNIGHT &nbsp; $19.99</label>  
                    </form>                    
                </div>
            </div>
            <div className="cartship__inner__emailbox">
                <input className="cartship__inner__emailbox-email" type="text" id="fname" placeholder="Enter Email"></input>                
                <button type="button" className="cartship__inner__emailbox-btn">Submit</button> 
            </div>
            <Linebreak 
            width={'100%'}
            mt={'1vw'}  
            />  
            <div className="cartship__inner__socialbox">  
                <img className="cartship__inner__socialbox-ico" src={youTube} alt=""></img>                  
                <img className="cartship__inner__socialbox-ico" src={ig} alt=""></img>
                <img className="cartship__inner__socialbox-ico" src={pint} alt=""></img>
                <img className="cartship__inner__socialbox-ico" src={twit} alt=""></img>                   
                <img className="cartship__inner__socialbox-ico" src={fb} alt=""></img>              
            </div>
        </div>
    </div>      
    );
}

export default Cartshipopts;