import React, { useEffect } from 'react'
import Banner from './Banner'
import ProductBannerOne from './ProductBannerOne'
import ProductBannerTwo from './ProductBannerTwo'
import BannerTwo from './BannerTwo'
import Featured from './Featured'
import Shipping from './Shipping'
import { useLocation } from 'react-router-dom'
import WhatsAppButton from './WhatssapButton'
import Slider from './Slider'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div>
      <Slider/>
     <Banner/>
     <WhatsAppButton/>
     <ProductBannerOne/>
     <ProductBannerTwo/>
     <BannerTwo/>
     <Featured/>
     <Shipping/>
    </div>
  )
}

export default Home