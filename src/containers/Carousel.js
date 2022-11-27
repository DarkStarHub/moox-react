import React, { useEffect, useRef} from 'react';
import './carousel.css'
//import Carouselcard from './Carouselcard';
import {GetDbArray} from '../components/DBHandler'
import { useNavigate } from 'react-router-dom';



/*
function PopCarousel(inc1,inc2,inc3,c1,c2,c3){   
        
    const img1 = require(`../${inc1.images.a}`);
    
    if(inc1 != null)
    {
        c1.current[2].dataset.item = inc1.id;        
        c1.current[0].src = img1;
        c1.current[1].innerHTML = inc1.label;        
    }
    else{
        c1.current[2].dataset.item = null;
        c1.current[0].src = null;
        c1.current[1].innerHTML = null;       
    }

    const img2 = require(`../${inc2.images.a}`);
    
    if(inc2 != null)
    {
        c2.current[2].dataset.item = inc2.id;
        c2.current[0].src = img2;
        c2.current[1].innerHTML = inc2.label        
    }
    else{
        c2.current[2].dataset.item = null;
        c2.current[0].src = null;
        c2.current[1].innerHTML = null;       
    }
    
    const img3 = require(`../${inc3.images.a}`);
    
    if(inc3 != null)
    {
        c3.current[2].dataset.item = inc3.id;
        c3.current[0].src = img3;
        c3.current[1].innerHTML = inc3.label        
    } 
    else{        
        c3.current[2].dataset.item = null;
        c3.current[0].src = null;
        c3.current[1].innerHTML = null;        
    }
   
}*/

let itemObj1,itemObj2,itemObj3;
let carPos = 0;
 


function Carousel(props){  
    const navigate = useNavigate();

    function navigateItem(inc){
        sessionStorage.setItem("itemId", inc);
        navigate('/item');
    }
    
    
    let itemArray = [];
    let itemCategory;

    const dept = sessionStorage.getItem('department');     
    
    if(dept == "womens")
    {
        itemCategory = "womenclothing";
    }
    else
    {
        itemCategory = "clothing";
    }        
    

    itemArray = GetDbArray(itemCategory);  
    let carrMax = Math.ceil(itemArray.length/3)-1;
       
    

    const cCard1 = useRef(null);
    const cCard1Img = useRef(null);
    const cCard1Txt = useRef(null);

    const cCard2 = useRef(null);
    const cCard2Img = useRef(null);
    const cCard2Txt = useRef(null);
    
    const cCard3 = useRef(null);
    const cCard3Img = useRef(null);
    const cCard3Txt = useRef(null);
    
    

    const fCarr = useRef(null);
    const bCarr = useRef(null);





    function UpdateCarousel(inc1,inc2,inc3){        
        itemObj1 =  inc1;
        itemObj2 =  inc2;
        itemObj3 =  inc3;   
        
        const img1 = require(`../${itemObj1.images.a}`); 
        cCard1Img.current.src = img1;    
        cCard1Txt.current.innerHTML = itemObj1.label;

        const img2 = require(`../${itemObj2.images.a}`);
        cCard2Img.current.src = img2;    
        cCard2Txt.current.innerHTML = itemObj2.label;
       
        const img3 = require(`../${itemObj3.images.a}`);  
        cCard3Img.current.src = img3;    
        cCard3Txt.current.innerHTML = itemObj3.label;
    }

   
    function moveTest(inc){
        inc.className = "moveFromRight";
        setTimeout(function() {inc.className = null }, 350);
    }

    function moveBack(inc){
        inc.className = "moveFromLeft";
        setTimeout(function() {inc.className = null }, 350);
    }


    function fadeForward(inc,delay){
        inc.className = "fadeOut";        
        setTimeout(function() {moveTest(inc)}, delay);
        //setTimeout(function() {cCard1.current.className = null }, 350);
    }

    function fadeBack(inc,delay){
        inc.className = "fadeOut";        
        setTimeout(function() {moveBack(inc)}, delay);
        //setTimeout(function() {cCard1.current.className = null }, 350);
    }


    function ForwardCarousel(){          
        carPos++        
        if(carPos > carrMax)
        {
            carPos = carrMax;
        }
        if(carPos == carrMax)
        {
            fCarr.current.style.visibility = "hidden"
        }
        else{
            fCarr.current.style.visibility = "visible"
            bCarr.current.style.visibility = "visible"
        }    
                         

        fadeForward(cCard1.current,350);
        fadeForward(cCard2.current,400);
        fadeForward(cCard3.current,450);  


        setTimeout(function() { UpdateCarousel(itemArray[0+carPos*3],
        itemArray[1+carPos*3],
        itemArray[2+carPos*3])}, 300);  
        
    }


    function BackCarousel(){       
        carPos--
            if(carPos < 0)
            {
                carPos = 0;
            }
            if(carPos == 0)
            {
                bCarr.current.style.visibility = "hidden"
            }
            else{
                fCarr.current.style.visibility = "visible"
                bCarr.current.style.visibility = "visible"
            }   
          

           

            fadeBack(cCard3.current,350);
            fadeBack(cCard2.current,400);
            fadeBack(cCard1.current,450);  
            
            setTimeout(function() { UpdateCarousel(itemArray[0+carPos*3],
            itemArray[1+carPos*3],
            itemArray[2+carPos*3])}, 300); 
    }


        
    useEffect(()=>{
        UpdateCarousel(itemArray[0],itemArray[1],itemArray[2]);
    }, []);

   

   
    
    return(
    <div className="carmain">
        <div className="carmain__inner">
            <div className="carmain__left">
                <div className="carmain__left__textbox">
                    <span className="carmain__left__textbox-title">Grab your coat</span>
                    <span className="carmain__left__textbox-copy">Presenting the styles you need for the season ahead-
                        these are the extra-luxe layers you'll wear with 
                        everything
                    </span>
                </div>
            </div>
            <div className="carmain__right">
                <div className="carr-button-f" onClick={() => ForwardCarousel()} ref={fCarr}></div>
                <div className="carr-button-b" style={{visibility:'hidden'}} onClick={() => BackCarousel(cCard1,cCard2,cCard3)} ref={bCarr}></div>
                <div className="car-card-box">   
                    <div ref={cCard1}>
                        <div className="car-card" onClick={() => navigateItem(itemObj1.id)}>                        
                            <img className="car-card-img" ref={cCard1Img} src=""></img>                         
                            <span className="car-card-text" ref={cCard1Txt} ></span>
                        </div>  
                    </div>
                    <div ref={cCard2}>
                        <div className="car-card" onClick={() => navigateItem(itemObj2.id)}>                        
                            <img className="car-card-img" ref={cCard2Img} src=""></img>                         
                            <span className="car-card-text" ref={cCard2Txt} ></span>
                        </div>  
                    </div>
                    <div ref={cCard3}>
                        <div className="car-card" onClick={() => navigateItem(itemObj3.id)}>                        
                            <img className="car-card-img" ref={cCard3Img} src=""></img>                         
                            <span className="car-card-text" ref={cCard3Txt}></span>
                        </div> 
                    </div>                   
                </div>                             
            </div>
        </div>         
    </div>         
    );       
}

export default Carousel;