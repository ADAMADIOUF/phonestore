import WhatsAppWidget from './Whatsapp'
import 'react-whatsapp-widget/dist/index.css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import Loading from './Loading'
import Error from './Error'
import ProductImages from './ProductImages'
import { formatPrice } from '../utils/helpers'

const SingleProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id, true))
  }, [dispatch, id])

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    if (product && product.img && product.img.length > 0) {
      setSelectedImage(product.img[0])
    }
  }, [product])

  useEffect(() => {
    if (product) {
      sessionStorage.setItem('productDetails', JSON.stringify(product))
    }
  }, [product])

  useEffect(() => {
    const storedProductDetails = sessionStorage.getItem('productDetails')
    if (storedProductDetails) {
      const storedProduct = JSON.parse(storedProductDetails)
      if (storedProduct && storedProduct.img && storedProduct.img.length > 0) {
        setSelectedImage(storedProduct.img[0])
      }
    }
  }, [])
  const handleAddToCart = () => {
    const message = `je veux acheter ${product.name} x${qty}`
    const url = `https://wa.me/+221777618072?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  return (
    <div className='section-center single-product-container'>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <div className='container-singleProduct'>
          <div>
            {product && product.img ? (
              <ProductImages
                images={product.img}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            ) : null}
          </div>
          <div>
            <h1 className='product-name'>{product && product.name}</h1>
            <p className='product-description'>
              {product && product.description}
            </p>
            <p className='product-price'>{ formatPrice(product.price)}</p>
            <button onClick={handleAddToCart} className='whatsapp-button '>
              acheter par whatsapp
            </button>
            {showWhatsAppWidget && (
              <WhatsAppWidget
                phoneNumber='+221777618072'
                message={`
je veux acheter ${product.name}`}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleProduct
