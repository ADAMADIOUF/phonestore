
// import React, { useState, useEffect } from 'react'

// const ProductImages = ({ images = [] }) => {
//   const [main, setMain] = useState('')

//   useEffect(() => {
//     if (images.length > 0) {
//       setMain(images[0])
//     }
//   }, [images])

//   const handleImageClick = (image) => {
//     setMain(image)
//   }

//   return (
//     <div className='product-images'>
//       {main && (
//         <img
//           src={main}
//           alt='main'
//           className={`main ${images.length > 0 ? 'active' : ''}`}
//         />
//       )}
//       <div className='gallery'>
//         {images.map((image, index) => (
//           <img
//             src={image}
//             alt={`Product Image ${index}`}
//             key={index}
//             onClick={() => handleImageClick(image)}
//             className={`${image === main ? 'active' : ''} slider-item`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProductImages

import React, { useState, useEffect } from 'react'

const ProductImages = ({ images = [] }) => {
  const [main, setMain] = useState('')

  useEffect(() => {
    if (images.length > 0) {
      setMain(images[0])
    }
  }, [images])

  const handleImageClick = (image) => {
    setMain(image)
  }

  if (!images || images.length === 0) {
    return <div>No images available.</div>
  }

  return (
    <div className='product-images'>
      {main && <img src={main} alt='main' className='main' />}
      <div className='gallery'>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`Product Image ${index}`}
            key={index}
            onClick={() => handleImageClick(image)}
            className={`${image === main ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductImages
