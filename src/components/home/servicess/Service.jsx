import React from 'react'
import ServicesData from './ServicesData'

const Service = () => {
  return (
    <>
     <section className="services topMargin">
        <div className="container">
            <div className="heading">
                <h3>Want Good Seed?</h3>
                <h1>Get information of Seed according to your area</h1>
            </div>
            <div className="contain grid topMargin">
                {ServicesData.map((val)=>{
                    return(
                        <>
                        <div className="box">
                        <div className="img">
                            <img src="https://images.pexels.com/photos/1391249/pexels-photo-1391249.jpeg?cs=srgb&dl=pexels-%C3%A0nil-1391249.jpg&fm=jpg" alt="image" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
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

export default Service
