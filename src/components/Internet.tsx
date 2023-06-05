import React from 'react'
import '../styles/Internet.css'
import Mpesa from './Mpesa'

function Internet() {
  return (
    <div className='promo'>
          <h1>Internet Connection For</h1>
          <div>
              <div className='connections'>
                  <div className='myconnection'>My Phone</div>
                  <div className='myconnection'>My Home</div>
                  <div className='myconnection'>My Business</div>
              </div>
             <div className='connection'>
                  <div className='connection-img'>
                  <img src='https://www.safaricom.co.ke/images/banners/data1.jpg' alt=''/>
                      <h1 className='tittle'>Data</h1>
                      <div className='our-content'>
                          <div>Prepay Service</div>
                          <div>Postpay Service</div>
                          <div>Promotions & Offers</div>
                  </div>
              </div>
                  <div className='connection-img'>
                  <img src='https://www.safaricom.co.ke/images/1-3.png' alt='' />
                      <h1 className='tittle'>Offers</h1>
                      <div className='our-content'>
                          <div>YouTube Bundles Promo</div>
                          <div>Angaza Bundles</div>
                          <div>YouTube Shorts</div>
                 </div>
              </div>
              <div className='connection-img'>
                      <h1 className='tittle'>Find out how much talktime you can get with your budget</h1>
                      <div className='our-content'>
                          <button className='button3'>Enter Amount</button>
                          <div>Your Data: 0.0Mbs</div>
                          <button className='button4'>Buy Now</button>
                  </div>
              </div>
             </div>
          </div>
          <Mpesa/>
    </div>
  )
}

export default Internet
