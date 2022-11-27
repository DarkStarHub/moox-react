import React from 'react';
import Header from '../containers/Header';
import Itemcontainer from '../containers/Itemcontainer';
import Linebreak from '../components/Linebreak';
import Itemdesc from '../components/Itemdesc';
import Shippingdesc from '../components/Shippingdesc';
import Footer from '../components/Footer';
import Recentview from '../containers/Recentview';
import { ItemContextProvider } from '../store/item-context';
import { BagContextProvider } from '../store/bag-context';



function Itempage(){
   return <div>  
      <BagContextProvider>
         <ItemContextProvider>    
            <Header/>               
            <Itemcontainer />         
            <Linebreak width={'96%'}/>  
            <Itemdesc />       
            <Linebreak width={'96%'}/>  
            <Shippingdesc />
            <Recentview />
         </ItemContextProvider>
      </BagContextProvider>
      <Footer />      
      </div>
}

export default Itempage;