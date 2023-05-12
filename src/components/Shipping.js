import React from 'react'
import { FaShippingFast, FaUndoAlt, FaExchangeAlt, FaTag } from 'react-icons/fa'

function Shipping() {
  return (
    <div className='shipping'>
      <div className='shipping-item'>
        <FaShippingFast />
        <p>Livraison gratuite</p>
      </div>
      <div className='shipping-item'>
        <FaUndoAlt />
        <p>Retours faciles</p>
      </div>
      <div className='shipping-item'>
        <FaExchangeAlt />
        <p>Échanges faciles</p>
      </div>
      <div className='shipping-item'>
        <FaTag />
        <p>Garantie du meilleur prix</p>
      </div>
    </div>
  )
}

export default Shipping
