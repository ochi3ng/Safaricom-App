import React from 'react'
import '../styles/Body.css'

function Body() {
  return (
    <div className='body'>
     <div className='body-title'>
              <div className='title1'>Chapa Dimba Season 4 is back.</div>
              <div className='title2'>#ChezaKamaWewe</div>
              <button className='title-button'>Learn More</button>
     </div>
          <div className='outer-popular'>
              <h1> Popular Links</h1>
             <div className='popular'>
                  <div>
                      <h2 className='popular-title'>VOICE</h2>
                      <div className='popular-text'>
                          <ul>Post-Pay Packages</ul>
                          <ul>Zuri</ul>
                          <ul>Voice Tariffs</ul>
                          <ul>Tunukiwa Minutes</ul>
                      </div>
                  </div>
                  <div>
                      <h2 className='popular-title'>INTERNATE</h2>
                      <div className='popular-text'>
                          <ul>Data Bundles</ul>
                          <ul>Home Fibre</ul>
                          <ul>Free Facebook</ul>
                          <ul>Safaricom Roaming Data Bundles</ul>
                     </div>
                  </div>
                  <div>
                      <h2 className='popular-title'>M-PESA</h2> 
                      <div className='popular-text'>
                          <ul>M-PESA</ul>
                          <ul>Fuliza</ul>
                          <ul>Link paypal to M-PESA</ul>
                          <ul>M-PESA Charges 2023</ul>
                        </div>

                  </div>
                  <div>
                      <h2 className='popular-title'>OTHER SERVICES</h2>
                     <div className='popular-text'>
                          <ul>52 Week Saving Challenge</ul>
                          <ul>Lipa Mdogo Mdogo Phones</ul>
                          <ul>Safaricom Careers</ul>
                          <ul>Safaricom eSIM</ul>
                     </div>

                  </div>
             </div>
          </div>
    </div>
  )
}

export default Body
