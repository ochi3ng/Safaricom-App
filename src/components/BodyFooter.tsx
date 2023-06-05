import React from 'react'
import '../styles/BodyFooter.css'
import Internet from './Internet'

function BodyFooter() {
  return (
    <div className='bodyfooter'>
      <h2 className='bodyfoo'>What`s new</h2>
          <p className='paragraph'>Find out more about our latest initiatives and innovative products and services.</p>
 <div className='img'>
              <div className='image-div'>
                  <img className='imageone' src='https://www.safaricom.co.ke/images/calendars/whats-newfy23.jpg' alt='' />
          <div className='our-content'>
            <div>Safaricom PLC Full Year 2022/2023 Financial Results</div>
            <p>Take a look at our recent business performance report for the Financial year 2022/2023.</p>
            <button className='button1'>View Report</button>
                  </div>
              </div>
              <div className='image1-div'>
                  <img className='imgs' src='https://www.safaricom.co.ke/images/e-sim-card-new.png' alt='' />
          <div className='our-content'>
            <h1 className='tittle'>One Voice Tariff</h1>
            <p>Get 50% airtime bonus with every top-up</p>
            <div>Dial *544# to get started</div>
            <button className='button2a'>See Tarrifs</button>
                  </div>
              </div>
              <div className='images-div'>
                  <h1 className='tittle'>Find out how much talktime you can get with your budget</h1>
          <div className='our-content'>
            <button className='button3'>Enter Amount</button>
            <div>Your Talktime: 0.0</div>
            <button className='button4'>Buy Now</button>
                  </div>
              </div>
 </div>
 <Internet/>
    </div>
  )
}

export default BodyFooter
