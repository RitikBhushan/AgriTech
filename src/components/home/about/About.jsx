import React from 'react'

const About = () => {
    const data = [
        {
          title: "Who we are And What we Do",
          desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
          desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cover: "./assets/about.jpg",
        },
      ]
return (
<>
    <section className='about topMargin'>
        <div className="container flex">
            {data.map((val)=>{
            return(
            <>
                    <div className="left mtop">
                        <div className="heading">
                            <h3>About web</h3>
                            <h1>{val.title}</h1>
                        </div>
                        <p>{val.desc1}</p>
                        <p>{val.desc2}</p>
                        <p>{val.desc3}</p>
                        <button className="primary-btn">about more</button>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src="" alt="image" />
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

export default About