import React, { useContext, useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

import searchIco from "../assets/Icons/search.png"
import logIco from "../assets/Icons/login.png"
import wishIco from "../assets/Icons/wishlist.png"
import bagIco from "../assets/Icons/bag.png"
import Bagmodal from './Bagmodal.js';
import Logmodal from '../components/Logmodal';
import Searchmodal from '../components/Searchmodal';
import BagContext from '../store/bag-context';



function Header(props){
    const [bagModalIsOpen,setBagModalIsOpen] = useState(false);
    const [logModalIsOpen,setLogModalIsOpen] = useState(false);
    const [searchModalIsOpen,setSearchModalIsOpen] = useState(false);

    
    const bagCtx = useContext(BagContext);

  

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


    function toggleSearchOpen(){
        if(searchModalIsOpen === true) 
       {
        setSearchModalIsOpen(false);        
       }  
       else{
        setSearchModalIsOpen(true);               
       }
    }



    function deptElement(){
        if(sessionStorage.getItem("department") == 'womens')  
        {
            return <>
                <Link to='/' className='header__genderbox__links__unselected-link'>Men</Link>                   
                <Link to='/womens' className='header__genderbox__links__selected-link'>Women</Link>  
                </>
        }
        else{
            return <>
                <Link to='/' className='header__genderbox__links__selected-link'>Men</Link>                   
                <Link to='/womens' className='header__genderbox__links__unselected-link'>Women</Link> 
                </>
        }
    }

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


    function setOne(){
        sessionStorage.setItem("category", '1');
        if(props.setCat != null)
        {
          props.setCat('1');  
        }      
    }
    function setTwo(){
        sessionStorage.setItem("category", '2')
        if(props.setCat != null)
        {
           props.setCat('2'); 
        }
        
    }
    function setThree(){
        sessionStorage.setItem("category", '3')
        if(props.setCat != null)
        {
            props.setCat('3');
        }
    }




    return(
        <>
        <div className='header'>
            <div className='header__genderbox'>
                <div className='header__genderbox__links'>  
                    {deptElement()}                                                  
                </div>
            </div>
            <div className='header__icons'>
                <div className='header__icons-leftbox'>
                    <img className="header__icons-leftbox__search-icon" src={searchIco} onClick={toggleSearchOpen} alt=""></img>
                </div>
                <div className='header__logo'>MOOX</div>
                <div className='header__icons-rightbox'>
                    <img className="header-icon --cp" id="logId" src={logIco} onClick={toggleLogOpen} alt=""></img>
                    <img className="header-icon" src={wishIco} alt=""></img>
                    <img className="header-icon --cp" id="bagId" src={bagIco} onClick={toggleBag} alt=""></img> 
                    {bagBadge()}               
                </div>               
                {logModalIsOpen ? <Logmodal /> : null}  
                {bagModalIsOpen ? <Bagmodal /> : null} 
                {searchModalIsOpen ? <Searchmodal close={toggleSearchOpen}/> : null}        
            </div>
            <div className='header__navbar'>
                <div className='header__navbar-menu'>
                    <div >New</div>
                    <div >Designers</div>
                    <Link to='/Catalogue' onClick={setOne}>Clothing</Link>                    
                    <Link to='/Catalogue' onClick={setTwo}>Shoes</Link> 
                    <Link to='/Catalogue' onClick={setThree}>Accessories</Link> 
                    <div >Sale</div>
                </div>                
            </div>
        </div>  
        <div className='head-spacer'></div>
        </>   
    );
}

export default Header;