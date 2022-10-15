import React from 'react'
import Blogdata from './Blogdata'

const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>LATEST NEWS</h3>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad non natus velit illo dolorum.</h1>
          </div>
          <div className="container grid topMargin">
            {Blogdata.map((val)=>{
              return(
                <>
                  <div className="box">
                    <div className="img">
                      <img src="" alt="image" />
                    </div>
                    <div className="text">
                      <span>{val.date}</span>
                      <h2>{val.title}</h2>
                      <a href="/">Read More</a>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
