import React, { useEffect } from 'react'
import { listProducts } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Error from './Error'
import Loading from './Loading'
import { Link, useLocation } from 'react-router-dom'
import BannerShop from './BannerShop'
import { formatPrice } from '../utils/helpers'

const Shop = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {  products, loading, error } = productList
const location = useLocation()
useEffect(() => {
  window.scrollTo(0, 0)
}, [location])

  
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }
  return (
    <>
  <BannerShop/>
      <div className=' section-center product-banner-two'>
        {products.map((product) => {
          const { name, price, id, img } = product
         

          return (
            <div key={id} xs={6} sm={6} md={4} lg={4} className='mb-4'>
              <Link to={`/products/${id}`}>
                <div>
                  <img src={product.img[0]} alt='' />
                  <div>
                    <h3>{name}</h3>
                    <p>{formatPrice(price)}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Shop
