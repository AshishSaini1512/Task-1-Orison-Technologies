import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Rmail</h1>
        <p>Subscribe to our newsletter and stay</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter