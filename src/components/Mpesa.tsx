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
                  <div>Receive and separate business funds from personal funds</div>
                  <h2>Dial *334# to get started</h2>
                  <button>Learn More</button>
              </div>
              <div className='mpesa-img' >
                  <h1 className='tittle'>Find out just how much transaction with M-PESA will cost you</h1>
            <button>Withdraw from Agent</button>
            <button>Select Amount Range</button>
            <div>Ksh: 0</div>
          </div>
              <div className='mpesa-img'>
              <img src='https://www.safaricom.co.ke/images/lipa-na-mpesa.jpg' alt=''/>
                  <h1 className='tittle'>Lipa Na M-PESA</h1>
              <div>You can buy goods and pay through your phone</div>
              <div>Get started now</div>
              <button>Apply For Till Number</button>
            </div>
        </div>
        <Business/>
    </div>
  )
}

export default Mpesa
