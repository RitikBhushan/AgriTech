import React from 'react'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
// import WorkIcon from '@mui/icons-material/Work';
// import GridViewIcon from '@mui/icons-material/GridView';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    window.addEventListener('scroll',function(){
        const header = this.document.querySelector("header")
        header.classList.toggle("active",this.window.screenY>200)

    })
  return (
    <div>
      <header className='header'>
        <div className="container flex">
            <div className="logo">
                <img src="" alt="img" />
            </div>
            <div className="nav">
                <ul className={sidebar ? "nav-links-sidebar":"nav-links"} onClick={()=> setSidebar(false)}>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/pages'>About</Link></li>
                <li><Link to ='/blog'>Region </Link></li>
                <li><Link to ='/portfolio'>Weather Report</Link></li>
                <li><Link to ='/shop'>Technology</Link></li>
                <li><Link to ='/contact'>Contact Us</Link></li>
                  <li className='icon'>
                    {/* <SearchIcon className='HeaderIcon'/>
                    <WorkIcon className='HeaderIcon'/>
                    <GridViewIcon className='HeaderIcon'/> */}

                  </li>
                  </ul>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
