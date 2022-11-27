import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Menspage from './pages/Mens'
import Womenspage from './pages/Womens'
import Cartpage from './pages/Cart'
import Cataloguepage from './pages/Catalogue'
import Itempage from './pages/Item'


function App() {
  return (    
    
      <Routes>
        <Route path="/" element={<Menspage />} />
        <Route path="/womens" element={<Womenspage />} />   
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/catalogue" element={<Cataloguepage />} />  
        <Route path="/item" element={<Itempage />} />  
      </Routes>
    
  );
 
}

export default App;
