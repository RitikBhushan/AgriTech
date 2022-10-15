import React from 'react'

const Home = () => {
  return (
    <>
    <section className='home'>
    <div className="container flex">
        <div className="left">
            <div className="img">
                <img src="https://www.betterteam.com/images/farmer-job-description-4088x2725-20201130.jpeg?crop=1:1,smart&width=1200&dpr=2" alt="image" />
                {/*  */}
            </div>
        </div>
        <div className="right topMarign">
            <h1> iAgri <br />
                </h1>
                <div className="scoialIcon">
                    <i className='fab fa-facebook-f facebook'></i>
                    <i className='fab fa-instagram instagram'></i>
                    <i className='fab fa-twitter twitter'></i>
                    <i className='fab fa-youtube youtube'></i>
                    <i className='fab fa-pinterest pinterest'></i>
                    <i className='fab fa-dribbble dribbble'></i>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde itaque dignissimos beatae fugiat ipsa placeat voluptates adipisci, quae illo recusandae atque quibusdam et dolor repudiandae dolorum! Itaque fugit voluptas assumenda.</p>
                <button className='primary-btn'> Contact Us</button>
        </div>
    </div>
    </section>
    </>
  )
}

export default Home
