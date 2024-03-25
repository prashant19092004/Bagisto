import React from 'react'
import '../style.css';

const Footer = () => {
  return (
    <div>
        <div className='footer d-flex justify-content-between align-items-center p-7'>
            <div className='footer-left d-flex'>
                <ul className='list-unstyled d-flex flex-column gap-3'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Customer Service</li>
                    <li>What's New</li>
                    <li>Terms of Use</li>
                    <li>Terms & Conditions</li>
                </ul>
                <ul className='list-unstyled d-flex flex-column gap-3'>
                    <li>Privacy Policy</li>
                    <li>Payment Policy</li>
                    <li>Shipping Policy</li>
                    <li>Refund Policy</li>
                    <li>Return Policy</li>
                </ul>
            </div>
            <div className='footer-right d-flex flex-column'>
                <h1 className='fst-italic'>Get Ready for our Fun Newsletter!</h1>
                <p className='fs-6'>Subscribe to stay in touch.</p>
                <div className='footer-input d-flex p-2 justify-content-center'>
                    <input className='border-0 bg-transparant' type='email' placeholder='email@example.com' />
                    <button className='bg-white py-2 px-4 border-0 rounded-3' type='submit'>Subscribe</button>
                </div>        
            </div>
        </div>
        <div className='sub-footer'>
            <p>© Copyright 2010 - 2024, Webkul Software (Registered in India). All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer