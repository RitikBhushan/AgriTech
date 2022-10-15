import React from 'react'
import Data from './Data'

const Work = () => {
  return (
    <>
     <section className="work">
        <div className="heading">
            <h3>somthing</h3>
            <h1>Writing work in progress</h1>
        </div>
        <div className='content'>
            {Data.map((val)=>{
                return (
                    <>
                    <div className="box">
                        <div className="img">
                            <img src="https://media.istockphoto.com/photos/sowers-hand-with-wheat-seeds-picture-id463518829?k=20&m=463518829&s=612x612&w=0&h=O2aJplR2iYrkQ1zVIxjoHcCcr2iAwyabd3L5gdvYI-E=" alt="image" />
                        </div>
                        <div className="overlay">
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                            <div className="icon"></div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    </section> 
    </>
  )
}

export default Work
