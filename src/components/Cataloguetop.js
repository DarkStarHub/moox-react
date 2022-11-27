import React from 'react';
import './cataloguetop.css'

import SortContext from '../store/sort-context';
import { useContext } from 'react';




function Cataloguetop(){   

    const sortCtx = useContext(SortContext);
   

    

    function setTitle(){
        let retCat;
        switch(sessionStorage.getItem('category'))
        { 
        case "1":         
            retCat = "Clothing"
               
        break;
        case "2":         
            retCat = "Shoes"                     
        break;
        case "3":         
            retCat = "Accessories"                      
        break;        
        }
        return retCat;
    }

    function setSort(inc){
        sortCtx.changeSort(inc);
    }

    
    return(
        <div className="cataloguetop">
            <div className="cataloguetop__box">
                <span className="cataloguetop__box-title" id="catId">{setTitle()}</span>
                <span className="cataloguetop__box-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
            </div>
            <div className="cataloguetop__sort"> 
                <div className="cataloguetop__sort__inner">
                    <span className="cataloguetop__sort__inner-by">Sort by</span>
                    <select className="cataloguetop__sort__inner-options" onChange={e => setSort(e.target.value)} name="sortOptions">                        
                        <option value="0">LABEL</option>
                        <option value="1">PRICE LOW TO HIGH</option>
                        <option value="2">PRICE HIGH TO LOW</option>                                           
                    </select>
                </div>  
            </div> 
        </div>
    );
}

export default Cataloguetop;







