import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1"> 
        <div className="box">
            <img src="" alt="image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat, neque perferendis sunt, alias omnis sit doloremque sint voluptas, ad vero perspiciatis beatae in.</p>
            <div className="socialIcon">
                    <i className='fab fa-facebook-f '></i>
                    <i className='fab fa-instagram '></i>
                    <i className='fab fa-twitter '></i>
                    <i className='fab fa-youtube '></i>
                    <i className='fab fa-pinterest '></i>
                    <i className='fab fa-dribbble '></i>
            </div>
        </div>
        <div className="box">
            <h2>Quick Links</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Weather</li>
                <li>Technology</li>
                <li>Contact Us</li>
                <li>FAQ's</li>
            </ul>
        </div>
        <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non quidem numquam!</p>
                <span>15 Oct 2022</span>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non quidem numquam!</p>
                <span>15 Oct 2022</span>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem non quidem numquam!</p>
                <span>15 Oct 2022</span>
            </div>
        </div>
        <div className="box">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat vitae amet! At, deleniti.</p>

            <div className="icon">
                <i className='fa fa-location'></i>
                <label htmlFor=''>Location : Jaipur</label>
            </div>
            <div className="icon">
                <i className="fa fa-phone"></i>
                <label htmlFor="">Phone +91 8709360543</label>
            </div>
            <div className="icon">
                <i className="fa fa-envelope"></i>
                <label htmlFor="/">Email:ritikbhushanmain@gmail.com</label>
            </div>
        </div>
        </div>
        <div className="legal container">
        <p>Copyright @2022. All rights reserved.</p>
        <label htmlFor=""> Design & Developed by <span>React Assassian's</span> </label>
        </div>
      </footer> 
    </>
  )
}

export default Footer
