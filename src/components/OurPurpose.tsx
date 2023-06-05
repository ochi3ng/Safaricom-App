import React from 'react'
import '../styles/OurPurpose.css'
import Joinus from './Joinus'

function OurPurpose() {
  return (
    <div className='purpose'>
          <h1>Our Purpose</h1>
          <p>We seek to create opportunities for Kenyans to be a part of our growth story by empowering them with the right tools for economic growth.</p>
      <div className='purpose-content'>
        <div className='whoweare'>
                  <img src='https://www.safaricom.co.ke/images/whoweare.jpg' alt=''/>
                  <h1 className='tittle'>Who we are</h1>
                 <div className='our-content'>
            <div>Our Story</div>
            <div>Leadership</div>
            <div>Our Journey</div>
                 </div>
        </div>
              <div className='impact'>
                  <img src='https://www.safaricom.co.ke/images/impact1.jpg' alt='' />
                  <h1 className='tittle'>Our Impact</h1>
          <div className='our-content'>
            <div>Safaricom Foundation</div>
            <div>M-PESA Foundation</div>
            <div>Sustainability</div>
                  </div>
              </div>
              <div className='brand'>
                  <img src='https://www.safaricom.co.ke/images/golftour.jpg' alt='' />
                  <h1 className='tittle'>Our Brand</h1>
          <div className='our-content'>
            <div>Brand toolkit</div>
            <div>Brand Assets</div>
            <div>Brand Campaigns</div>
                  </div>
              </div>
      </div>
      <Joinus/>
    </div>
  )
}

export default OurPurpose
