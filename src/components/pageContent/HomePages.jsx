import React from 'react'
import About from '../home/about/About';
import Branding from '../home/Branding';
import Home from '../home/homes/Home';
import Service from '../home/servicess/Service';
import Blog from '../home/blog/Blog';
import Work from '../home/work/Work';
import Wrapper from '../home/Wrapper';
import WrapperOne from '../home/WrapperOne';
import Footer from '../home/Footer';


const HomePages = () => {
  return (
    <>
      <Home/>
      <Branding/>
      <About/>
      <Service/>
      <Wrapper/>
      <Work/> 
      <WrapperOne/>
      <Blog/>
      
    </>
  )
}

export default HomePages;
