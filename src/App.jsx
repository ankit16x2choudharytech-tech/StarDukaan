
import { useState } from 'react'
import './App.css'
import homeIcon from './assets/home.png'
import workfromanywhere from './assets/work-from-anywhere.svg'
import salesandanalytics from './assets/reports&analytics.svg'
import productmanagement from './assets/product.svg'
import managecustomer from './assets/manage-customer.svg'
import reviews from './assets/review.svg'
import whatsapp from './assets/whatsapp.svg'
import invoice from './assets/invoice.svg'
import safeandsecure from './assets/secure.svg'
import shopkeepar from './assets/shopkeepar.png'
import rightarrow from './assets/right-arrow.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import youtube from './assets/youtube.svg'
import call from './assets/call.svg'
import location from './assets/location.svg'
import email from './assets/mail.svg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const login = () => {
    closeMenu()
    console.log('Login clicked')
  }

  const register = () => {
    closeMenu()
    console.log('Register clicked')
  }
  const Explore = () => {
    closeMenu()
    location.href="#features";
  }

  return (
    <>
      <header>
        <div className="logo-name">
          <img src="/favicon.svg" alt="Star Dukaan logo" />
          <h2>
            Star <b>Dukaan</b>
          </h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`header-right ${menuOpen ? 'active' : ''}`}>
          <nav className="btn-link">
            <a href="#Home" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#price" onClick={closeMenu}>Price</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
          </nav>

          <div className="btn">
            <button onClick={login}>Login</button>
            <button className="register-btn" onClick={register}>
              Get Started
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="home-content" id='Home'>
            <div className='pinned'>
              <h5><b>Smart Billing</b>● <b>Whatsapp Invoices </b> ● <b>Customer Review </b></h5>
            </div>
            <div className='normal'>
              <h2>Smart Billing.</h2>
              <h2>Happier Customer.</h2>
              <h3 >Better Business.</h3>
              <p>Create bills in seconds,send invoice through Whatsapp,and collect customer feedback-all from one single plateform</p>
             {/* <div>
              <button onClick={register}>Get Started</button>
               <div>
              <button onClick={features}>Explore Features</button>
              </div> 
             </div> */}
            <div className="btn-explore">
            <button className="register-btn" onClick={register}>Get Started</button>
            <button className="feature-btn" onClick={Explore}>
              Explore Features
            </button>
          </div>
            </div>
             
        </div>
        <div className='Home'>
          <img src={homeIcon} alt="home" />
        </div>
        
      </main>
       <div className='features'id='features' >
        <h5><b>FEATURES</b></h5>
        <h3>Powerful Feature For <b> EveryShop </b> </h3>
        <p>Everything you need to manage billing,customers & reviews - in one place</p>
            <div className='features-card'>
              <div className='cardcontent'>
                <div className='imgdiv secure'>
                  <img src={safeandsecure} alt="Safe & Secure" />
                </div>
                <div>
                   <h4>Secure & Reliable</h4>
                   <p>Your data is protected with secure authentication and reliable cloud storage, ensuring your customers' information remains safe, private, and secure at all times.</p> 
                </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv invoice-icon'>
                  <img src={invoice} alt="Create Invoice " />
                </div>
                 <div>
                   <h4>Create Invoice Easily</h4>
                 <p>Generate professional GST-compliant invoices in seconds with your shop details, itemized products, and seamless GST support.</p>
                 </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv whatsapp'>
                  <img src={whatsapp} alt="Send on What's App" />
                </div>
                <div>
                   <h4>What's App Integration</h4>
                 <p>Share invoices directly to customers via your What's App Business number and collect reviews.</p>
                </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv review-icon' >
                  <img src={reviews} alt="Customer Reviews"  />
                </div>
                <div>
                  <h4>Customer Reviews</h4>
                 <p>Automatically request customer feedback after every purchase and turn happy customers into more 5-star reviews.</p>
                </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv customer-icon'>
                  <img src={managecustomer} alt="Manage Customer" />
                </div>
                  <div>
                    <h4>Manage Customers</h4>
                 <p>Save customer details and view puschase history whenever needed.</p>
                  </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv product-icon'>
                  <img src={productmanagement} alt="Product Management" />
                </div>
                  <div>
                    <h4>Product Management</h4>
                 <p>Add,edit and manage your products with price and stock.</p>
                  </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv analytics-icon'>
                  <img src={salesandanalytics} alt="sales & analytics" />
                </div>
                  <div>
                    <h4>Sales & Analytics</h4>
                 <p>Track daily,weekly and monthly sales with simple charts and reports.</p>
                  </div>
              </div>
              <div className='cardcontent'>
                <div className='imgdiv device-icon'>
                  <img src={workfromanywhere} alt="work-from-anywhere" />
                </div>
                  <div>
                     <h4>Works On All Devices</h4>
                     <p>Use it on mobile,tablet or desktop -anytime,anywhere.</p>
                  </div>
              </div>
            </div>
        </div>
        <div className='about' id='about'>
          <h5><b>ABOUT US</b></h5>
          <div className='aboutus'>
          <div className='about-image'>
             <img src={shopkeepar} alt="About us" />
          </div>
          <div className='about-text'>
             <h2>About Star Dukaan</h2>
             <h3><b>Helping Every Shop Turn Transactions Into Relationships.</b></h3>
             <p>Star Dukaan is a simple billing Customer engagement plateform build for shopkeepars who want to manage their business more efficiently.
              From creating professional invoices to sharing bills on What's App and collecting Customer reviews.Star Dukaan brings essential business tools together in one place.
             </p>
          </div>
          <div className='about-features'>
             <div className='about-feature'>
              <div className='about-icon invoice-icon'>
                <img src={invoice} alt="Craete simple invoice" />
              </div>
              <div>
                <h4>
                  Simple Billing
                </h4>
                <p>Create professional invoices without complecated workflows.</p>
              </div>
             </div>
             <div className='about-feature'>
              <div className='about-icon whatsapp'>
                <img src={whatsapp} alt="Better connection" />
              </div>
              <div>
                <h4>Better Connections</h4>
                <p>Use What's App to share invoices and request customer feedback.</p>
              </div>
             </div>
             <div className='about-feature'>
              <div className='about-icon analytics-icon'>
                <img src={salesandanalytics} alt="Business Growth" />
              </div>
              <div>
                <h4>Business Growth</h4>
                <p>Understand your sales and Customer feedback to make better decisions.</p>
              </div>
             </div>
          </div>
          </div>
        </div>
        <footer className='footer'>
          <div>
            <div>
               <div className="logo-name">
                  <img src="/favicon.svg" alt="Star Dukaan logo" />
                  <h2>
                      Star <b>Dukaan</b>
                  </h2>
               </div>
               <p>Smart Billing,What's App invoices and Customer reviews - everything your shop needs to grow Smarter.</p>
            </div>
            <div>
              <h4><b>Quick Links</b></h4>
              <nav>
                <a href="#Home">Home <img src={rightarrow} alt="Right Arrow" /></a>
                <a href="#features">Features<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="#price">Prices<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="#about">About Us<img src={rightarrow} alt="Right Arrow" /></a>
              </nav>
            </div>
            <div>
              <h4><b>Resources</b></h4>
              <nav>
                <a href="">Help Center<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">FQAs<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">Getting Started<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">Support<img src={rightarrow} alt="Right Arrow" /></a>
              </nav>
            </div>
            <div>
              <h4><b>Legal</b></h4>
              <nav>
                <a href="">Privacy Policy<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">Terms & Conditions<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">Refund Policy<img src={rightarrow} alt="Right Arrow" /></a>
                <a href="">Cookie Policy<img src={rightarrow} alt="Right Arrow" /></a>
              </nav>
            </div>
          </div>
          <div>
            <h4><b>Get In Touch</b></h4>
            <p>Have a question or need assistance? We're here to help your business grow.</p>
            <nav>
              <a href="tel:+919509627229"><img src={call} alt="Call Svg" />+91 9509627229</a>
              <a href="mailto:ankit16x2choudharytech@gmail.com?subject=Project%20Discussion"><img src={email} alt="Email Svg" />support@stardukaan.com</a>
              <a href="https://wa.me/919509627229?text=Hi%20Ankit Choudhary, I want to discuss a project with you."><img src={whatsapp} alt="What's App Svg" />+91 9509627229</a>
              <a href="https://maps.google.com/?q=Greater+Noida,India"><img src={location} alt="Location Svg" />Greater Noida,India</a>
              
            </nav>
          </div>
          <div>
            <h4><b>Follow Us</b></h4>
            <nav>
              <a href=""><img src={instagram} alt="Instagram Link" /></a>
              <a href=""><img src={facebook} alt="Facebook Link" /></a>
              <a href=""><img src={linkedin} alt="Linkedin Link" /></a>
              <a href=""><img src={youtube} alt="Youtube Link" /></a>
            </nav>
          </div>
          <div> <p> &copy; 2026 Star Dukaan. All rights reserved. </p></div>
        </footer>
    </>
  )
}

export default App
