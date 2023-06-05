import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div >
          <p className='footer-title'>Was this information helpful? If not tell us how we can improve</p>
        <div className='footer-nav'>
            <h2 className='nav-title'>Manage all your services in one App</h2>
      <img className='nav-image' src='https://www.safaricom.co.ke/images/icons/apple.png' alt=''/>
        <img className='nav-image' src='https://www.safaricom.co.ke/images/googleapp.png' alt='' />
        </div>
      <div className='footer'>
        <div>
          <div className='footer-details'>About Safaricom</div>
          <div className='footer-content'>
            <div>Voice</div>
            <div>Data</div>
            <div>Home Fibre</div>
            <div>M-PESA API</div>
          </div>
        </div>

        <div>
          <div className='footer-details'>Business</div>
          <div className='footer-content'>
            <div>M-PESA for business</div>
            <div>Internet for business</div>
            <div>Cloud solutions</div>
            <div>Mobile communication solutions</div>
            <div>Cybersecurity solutions</div>
          </div>
        </div>

        <div>
          <div className='footer-details'>About Us</div>
          <div className='footer-content'>
            <div>Our Leadership</div>
            <div>Safaricom Foundation</div>
          </div>
        </div>


        <div>
          <div className='footer-details'>Investor Relations</div>
          <div className='footer-content'>
            <div>Analysts Coverage</div>
            <div>Investor Calendar</div>
            <div>Share Price Performance</div>
            <div>Annual Reports</div>
          </div>
        </div>

        <div>
          <div className='footer-details'>FAQs</div>
          <div className='footer-content'>
            <div>Fuliza</div>
            <div>M-PESA Global</div>
            <div>Pochi la biashara</div>
            <div>Sim registration</div>
          </div>
        </div>

        <div>
          <div className='footer-details'>More</div>
          <div className='footer-content'>
            <div>Terms & Conditions</div>
            <div>Data Privacy Statement</div>
            <div>Frequently Asked Questions</div>
            <div>Press Releases</div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
