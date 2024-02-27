//import React from 'react';

import {database} from '../DataBase/DB';




function GetObjByPureId(id)// disregards department
{       
    for (var arr in database) {        
        for (var i = 0; i < database[arr].length; i++) {
            if(database[arr][i].id == id)
            {               
                return database[arr][i];               
            }
        }
    }    
    return null;
}



export function GetDbArray(inc){
    return database[inc];
}




export function GetCategory(dept)
{
    let retCat;   

    switch(sessionStorage.getItem('category'))
    {    

        case "1":    
        if(dept == "mens")
        {
            retCat = "clothing"
        }
        else
        {
            retCat = "womenclothing"
        }
        break;
        case "2": 
        if(dept == "mens")
        {
            retCat = "boots"
        }
        else
        {
            retCat = "womenboots"
        }              
        break;
        case "3": 
        if(dept == "mens")
        {
            retCat = "accessories"
        }
        else
        {
            retCat = "womenaccessories"
        }                
        break;        
    }
   
    return retCat;
}



export function ArrayShuffle(array)
{
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
}

export function LowToHighSort(array)
{    
    array.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
    
    return array;
}

export function HighToLowSort(array)
{
    array.sort(function(a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });

    return array;
}


export function AlphaLabelSort(array)
{
    array.sort(function(a, b){
        if(a.label < b.label) { return -1; }
        if(a.label > b.label) { return 1; }
        return 0;
    })

    return array;
}














export default GetObjByPureId;
