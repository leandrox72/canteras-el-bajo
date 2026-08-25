import { useState } from 'react'
import './products.css'
import { products } from '../../constants/data';

const Products = () => {

  const [ product, setProduct ] = useState(products[0])

  return (
    <div className='products'>
      <ul className='products__items'>
        {products.map((item) => (
          <li 
            className={product === item && 'active' }
            onClick={() => setProduct(item)}
            key={item.id}
          >{item.name}</li>
        ))}
      </ul>
      <div className='products__data'>
        <h2>{product.name}</h2>
        <div className='products__data-cont'>
          <ul className='info__cont'>
            {product.info.map((item, index) => (
              <li key={index}><p><span>{item.title}:</span> {item.value}</p></li>
            ))}
          </ul>    
          <p className='desc'>{product.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Products
