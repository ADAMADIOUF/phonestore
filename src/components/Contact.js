import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_7uk1sug',
        'template_5mj4qui',
        { name, email, message },
        'Gc1Gl0HLvCtGvFHPg'
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 10000); 
      })
        
        // You can display a success message or perform any other actions here
     
      .catch((error) => {
        console.error('Email error:', error)
        // You can handle the error here, such as displaying an error message to the user
      })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='contact-container'>
      <h2>Contactez-nous</h2>
      <p>
        Nous sommes une équipe passionnée chez World Business, dédiée à fournir
        les meilleurs téléphones mobiles à nos clients. Avec des années
        d'expérience dans l'industrie, nous comprenons l'importance d'avoir le
        téléphone parfait qui répond à vos besoins et à votre style de vie.
        Notre sélection de téléphones comprend les derniers modèles des marques
        les plus renommées. Que vous recherchiez un smartphone haut de gamme, un
        téléphone abordable ou un modèle spécifique, nous avons ce qu'il vous
        faut. Chez World Business, nous nous engageons à offrir une expérience
        de shopping exceptionnelle. Notre équipe amicale et compétente est là
        pour répondre à toutes vos questions et vous guider dans votre choix.
        Nous offrons également des services après-vente fiables pour garantir
        votre satisfaction à long terme.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Nom:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit'>Envoyer</button>
      </form>
      {showSuccess && (
        <div
          className='success-message'
          style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
          }}
        >
          <p>Votre message a été envoyé avec succès !</p>
        </div>
      )}
    </div>
  )
}

export default Contact
