import React from 'react'
import {Link, useParams} from 'react-router-dom'

const ProductInfo = () => {
    const params = useParams();
  return (
    <div>
    
    <Link to={`${params.productId}/${params.info}`}>
        Hello
    </Link>
    </div>
  )
}

export default ProductInfo