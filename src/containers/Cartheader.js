import React, { useContext, useState } from 'react';
import './cartheader.css'

import { Link } from 'react-router-dom';

//import searchIco from "../assets/Icons/search.png"
import logIco from "../assets/Icons/login.png"
import wishIco from "../assets/Icons/wishlist.png"
import bagIco from "../assets/Icons/bag.png"
import Bagmodal from './Bagmodal.js';
import Logmodal from '../components/Logmodal';

import BagContext from '../store/bag-context';




function Cartheader(){
    const [bagModalIsOpen,setBagModalIsOpen] = useState(false);
    const [logModalIsOpen,setLogModalIsOpen] = useState(false);

    const bagCtx = useContext(BagContext);   


    function toggleLogOpen(){            
        if(bagModalIsOpen === true) 
       {
        setBagModalIsOpen(false);         
       }  
       
       if(logModalIsOpen === true) 
       {
        setLogModalIsOpen(false);        
       }  
       else{
        setLogModalIsOpen(true);             
       }                
    };


    function toggleBag(){            
        if(logModalIsOpen === true) 
       {
        setLogModalIsOpen(false);        
       }
        
       if(bagModalIsOpen === true) 
       {
        setBagModalIsOpen(false);        
       }  
       else{
        setBagModalIsOpen(true);              
       }                
    };


    function bagBadge(){
        const bagDataObj2 = JSON.parse(localStorage.getItem('bagData')); 

        let totalItems = 0;

        if(bagDataObj2 != null)
        {
            bagDataObj2.forEach(element => {
                element = JSON.parse(element);
                totalItems += element.quantity;                
            });
        }
        
        if(totalItems >0)
        {
            return<>
            <div className='header-icon-bagbadge'>
                <span className='header-icon-bagbadge-count'>{totalItems}</span>
                </div>
            </>
        }
        else{
            return null
        }
    }



    return(
        <div>
            <div className="carthead-space">
            </div>
            <div className="carthead__wrapper" id="bagModalHook">
                <div className="carthead__wrapper__iconbox">
                    <div className="carthead__wrapper__iconbox__genderbox">                       
                    <Link to='/' className='carthead__wrapper__iconbox__genderbox__links__selected-link'>Men</Link>                   
                    <Link to='/womens' className='carthead__wrapper__iconbox__genderbox__links__unselected-link'>Women</Link>   
                    </div>  
                </div>
                <div className="carthead__wrapper-logo">MOOX</div>
                <div className="carthead__wrapper__iconbox" id="icoBoxId">   
                    <img className="carthead__wrapper__iconbox-headericon --cp" id="logId" src={logIco} onClick={toggleLogOpen}alt=""></img>
                    <img className="carthead__wrapper__iconbox-headericon" src={wishIco} alt=""></img>
                    <img className="carthead__wrapper__iconbox-headericon --cp" id="bagId" src={bagIco} onClick={toggleBag} alt=""></img>  
                    {bagBadge()}                
                </div>
                {logModalIsOpen ? <Logmodal /> : null}  
                {bagModalIsOpen ? <Bagmodal /> : null}           
            </div>
        </div>
    );
}

export default Cartheader;