import React, { useEffect } from 'react'
import { listProducts } from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Error from './Error'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const ProductBannerTwo = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { deals_products_Two: products, loading, error } = productList

  // Call the fetchProducts action creator when the component mounts
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
    <div className=' section-center product-banner-two'>
      {products &&
        products.map((product) => {
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
  )
}

export default ProductBannerTwo
