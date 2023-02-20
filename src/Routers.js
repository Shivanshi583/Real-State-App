import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Rent from "./Pages/Rent";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";



const Routers = () => {
  return   <Routes>  
     <Route path='/' element={<Navigate to='/rent'/>}/> 
    <Route path='/rent' element={<Rent/>}/>
    <Route path='/buy' element={<Buy/>}/>
    <Route path='/sell' element={<Sell/>}/>
    </Routes>
    
};

export default Routers;
