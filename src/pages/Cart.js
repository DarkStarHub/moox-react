import React, { useState } from 'react';
import Cartdisp from '../components/Cartdisp';
import Footer from '../components/Footer';
import Linebreak from '../components/Linebreak';
import Cartheader from '../containers/Cartheader';
import Cartshipopts from '../containers/Cartshipopts';
import { ItemContextProvider } from '../store/item-context';
import { BagContextProvider } from '../store/bag-context';


function Cartpage(){
   const [shipOpt, setShipOpt] = useState(0);

   return <div>
      <BagContextProvider>
         <ItemContextProvider>  
            <Cartheader />
            <Cartdisp sendState={shipOpt}/>
            <Linebreak       
               width={'100%'}
               mt={'1vw'}
               mb={'1vw'}      
            />
         </ItemContextProvider>
      </BagContextProvider>
      <Cartshipopts 
      curState={shipOpt}
      shipState={setShipOpt}/>
      <Footer />
   </div>
}

export default Cartpage;