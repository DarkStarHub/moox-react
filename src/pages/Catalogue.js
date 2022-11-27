import React, { useState } from 'react';
import Cataloguetop from '../components/Cataloguetop';
import Header from '../containers/Header';
import Linebreak from '../components/Linebreak';
import Pagewrapper from '../components/Pagewrapper';
import Cataloguedisp from '../containers/Catalguedisp';
import Footer from '../components/Footer';
import { SortContextProvider } from '../store/sort-context';


function Cataloguepage(){
   const [curCategory,setCurCategory] = useState(sessionStorage.getItem("category"));


   return <div>      
   <Header
      setCat={setCurCategory}
   />   
   <Pagewrapper>
      <SortContextProvider>
         <Cataloguetop />
         <Linebreak 
            width={'80%'}
            mt={'1vw'}
            mb={'1vw'}
         />  
         <Cataloguedisp />
      </SortContextProvider>
      <Linebreak 
         width={'90%'}
         mt={'1vw'}
         mb={'1vw'}
         /> 
      <Footer />
   </Pagewrapper>
   </div>
}

export default Cataloguepage;