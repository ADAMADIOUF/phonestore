import React from 'react'
import b1 from "../assets/b1.png"
const Banner = () => {
  return (
    <section className=' section-center banner'>
      <img src={b1} alt='' />
      <div className='banner-details'>
        <h3>Meilleures offres</h3>
        <p>World Business</p>
      </div>
    </section>
  )
}

export default Banner