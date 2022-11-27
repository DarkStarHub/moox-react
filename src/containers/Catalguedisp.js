import React, { useState } from 'react';
import { AlphaLabelSort, GetCategory, GetDbArray, HighToLowSort, LowToHighSort, } from '../components/DBHandler';
import './cataloguedisp.css'
import Cataloguecard from '../components/Cataloguecard';
import formatter from '../components/CurConvert';

import SortContext from '../store/sort-context';
import { useContext } from 'react';



function Cataloguedisp(){

    const sortCtx = useContext(SortContext);

    let itemArr = [];    

    const dept = sessionStorage.getItem('department');     

    let itemCategory = GetCategory(dept);
    
    
    if(itemCategory == null)
    {
        if(dept == "womens")
        {
            itemCategory = "womenclothing";
        }
        else
        {
            itemCategory = "clothing";
        }        
    }        
    
    

    switch(sortCtx.sort)
    {            
        case "0":             
        itemArr = AlphaLabelSort(GetDbArray(itemCategory));         
        break;       
        case "1":          
        itemArr = LowToHighSort(GetDbArray(itemCategory));        
        break;    
        case "2":          
        itemArr = HighToLowSort(GetDbArray(itemCategory));         
        break;
        default:
            itemArr = AlphaLabelSort(GetDbArray(itemCategory));   
        break;
    }  
    


    return(
        <div className="cataloguedisp">
            <div className="cataloguedisp__left">
                <span id="sideId">Coats</span>
                <button className="cataloguedisp__left-accordion">Section 1</button>
                <div className="cataloguedisp__left-panel">
                    <p>Lorem ipsum...</p>
                </div>
                <button className="cataloguedisp__left-accordion">Section 2</button>
                <div className="cataloguedisp__left-panel">
                    <p>Lorem ipsum...</p>
                </div>
            </div>
            <div className="cataloguedisp__right" id="itemViewID">
                <div className="cataloguedisp__right__inner">
                    {
                        itemArr.map((item) => (
                            <Cataloguecard
                            key={item.id}
                            id={item.id}
                            img={item.images.a}
                            label={item.label}
                            type={item.type}
                            price={formatter.format(item.price)}
                            />  
                        ))
                    }
                </div>                
            </div>
        </div>
    );
}

export default Cataloguedisp;