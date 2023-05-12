import React from 'react'
import b2 from '../assets/b2.png'
import { Link } from 'react-router-dom'
const BannerTwo = () => {
  return (
    <section className=' section-center banner'>
      <img src={b2} alt='' />
      <div className='banner-button'>
        <Link to={`/shop`}>
          <button className='btn banner-btn'>acheter</button>
        </Link>
      </div>
    </section>
  )
}

export default BannerTwo
