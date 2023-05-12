import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
          <div className='footer-col'>
            <h4>WorldBusiness Phone Store</h4>
            <p>
              Nous sommes une entreprise spécialisée dans la vente de téléphones
              mobiles de haute qualité.
            </p>
          </div>
          <div className='footer-col'>
            <h4>Liens rapides</h4>
            <ul>
              <li>
                <a href='/'>Accueil</a>
              </li>
              <li>
                <a href='/shop'>Boutique</a>
              </li>
              
              <li>
                <a href='/contact'>Contactez-nous</a>
              </li>
            </ul>
          </div>
          
          <div className='footer-col'>
            <h4>Suivez-nous</h4>
            <div className='social-links'>
              <a href='#'>
                <FaFacebook />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>
            &copy;
            {new Date().getFullYear()}
            <span> by adamadiouf2017@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
