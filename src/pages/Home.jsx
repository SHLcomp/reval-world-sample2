import React from 'react'
import  Navbar  from '../comp/navbar/Navbar'
import { Hero } from '../comp/hero/Hero';
import { Products } from '../comp/products/Products';
import Cust from '../comp/cust/Cust';

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Products />
        <Cust/> 
    </div>
  )
}
export default Home;