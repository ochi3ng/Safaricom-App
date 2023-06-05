import React from 'react'
import '../styles/Business.css'
import OurPurpose from './OurPurpose'

function Business() {
  return (
    <div className='business'>
          <h1>Business Solutions</h1>
          <p>We seek to provide cutting edge solutions for your business needs</p>
      <div className='business-content'>
        <div className='cloud'>
            <img src='https://www.safaricom.co.ke/images/cloud.jpg' alt=''/>
                  <h1 className='tittle'>Cloud solutions</h1>
            <div className='career-details'>Put your business ahead of the competition with technology and the latest online services</div>
          <div className='career-details'>Simple, Transparent and Honest</div>
                  <button className='buttons'>Cloud Services</button>
        </div>
        <div className='till'>
                  <img src='https://www.safaricom.co.ke/images/businesspayments.jpg' alt=''/>
                  <h1 className='tittle'>Business</h1>
          <div className='career-details'>Collect payments easily with no time limitation through M-PESA</div>
          <div className='career-details'>Simple, Transparent and Honest</div>
                  <button className='buttons'>M-PESA business till</button>
        </div>
              <div className='shiriki'>
                  <img src='https://www.safaricom.co.ke/images/banners/Mobile_Payments1.png' alt='' />
                  <h1 className='tittle'>Shiriki plan for business</h1>
          <div className='career-details'>Get affordable internet and calling rates for your small or medium sized business</div>
          <div className='career-details'>Simple, Transparent and Honest</div>
                  <button className='buttons'>M-PESA business till</button>
              </div>
      </div>
      <OurPurpose/>
    </div>
  )
}

export default Business
