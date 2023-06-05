import React from 'react'
import  '../styles/Mpesa.css'
import Business from './Business'

function Mpesa() {
  return (
    <div className='mpesa'>
          <h1>M-PESA</h1>
          <p>Send, receive and access money wherever you are.</p>
        <div className='m-pesa'>
              <div className='mpesa-img'>
                  <img src='https://www.safaricom.co.ke/images/pochi.jpg' alt='' />
                  <h1 className='tittle'>Pochi La Biashara</h1>
          <div className='our-content'>
            <div className='career-details'>Receive and separate business funds from personal funds</div>
            <div>Dial *334# to get started</div>
            <button className='mpesa-button'>Learn More</button>
                  </div>
              </div>
              <div className='mpesa-img' >
                  <h1 className='tittle'>Find out just how much transaction with M-PESA will cost you</h1>
          <div className='our-content'>
            <button className='withdraw-button'>Withdraw from Agent</button>
            <button className='withdraw-button'>Select Amount Range</button>
            <div>Ksh: 0</div>
            </div>
          </div>
              <div className='mpesa-img'>
              <img src='https://www.safaricom.co.ke/images/lipa-na-mpesa.jpg' alt=''/>
                  <h1 className='tittle'>Lipa Na M-PESA</h1>
          <div className='our-content'>
            <div className='career-details'>You can buy goods and pay through your phone</div>
            <div>Get started now</div>
            <button className='mpesa-button'>Apply For Till Number</button>
          </div>
            </div>
        </div>
        <Business/>
    </div>
  )
}

export default Mpesa
