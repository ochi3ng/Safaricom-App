import React from 'react'
import '../styles/Joinus.css'
import Footer from './Footer'


function Joinus() {
  return (
    <div className='joinus'>
          <h1>Join us</h1>
          <p>When we come together, we create amazing opportunities</p>
      <div className='joinus-content'>
              <div className='customer'>
                  <img src='https://www.safaricom.co.ke/images/customer.jpg' alt='' />
                  <h1 className='tittle'>New customer</h1>
          <div className='career-details'>Are you looking to join the fastest, most reliable and strongest network. Get started on your journey with us in quick and easily actionable steps.</div>
                  <button className='buttons'>Explore</button>
              </div>
        <div className='supplier'>
                  <img src='https://www.safaricom.co.ke/images/suppliers.jpg' alt=''/>
                  <h1 className='tittle'>Suppliers</h1>
          <div className='career-details'>We are looking to partner with competent and efficient individuals and businesses. All our suppliers are qualified through a transparent pre-qualification process prior to engagement.</div>
           
                  <button className='buttons'>Explore</button>
        </div>
       <div className='career'>
                  <img src='https://www.safaricom.co.ke/images/careers.jpg' alt='' />
                  <h1 className='tittle'>Careers</h1>
                  <div className='career-details'>We offer a wide range of opportunities within our diversified network. Visit our online portal to search and apply for all the latest jobs in our company.</div>
                  <button className='buttons'>Explore</button>
       </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Joinus
