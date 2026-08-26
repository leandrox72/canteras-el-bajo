import { useState } from 'react'
import './products.css'
import { products } from '../../constants/data';
import { Curtain } from '../../subcomponents';

const Products = () => {

  const [product, setProduct] = useState(products[0]);
  const [activeTab, setActiveTab] = useState(product.name);
  const [loading, setLoading] = useState(false);
  const infoCount = product.info.length;

  const handleProductChange = (item) => {
    if (item == null) return;
    if (item.id == product.id) return;

    setActiveTab(item.name);
    setLoading(true);
    
    setTimeout(() => {
      setProduct(item);
      setLoading(false);
    }, 500)
  }
  
  return (
    <div className='products'>
      <ul className='products__items'>
        {products.map((i) => (
          <button 
            className={i.name === activeTab && 'active' }
            onClick={() => handleProductChange(i)}
            key={i.id}
            type='button'
            disabled={loading}
          >{i.name}
          </button>
        ))}
      </ul>
      <div className='products__data'>
        <div className='products__data-title'>
          <Curtain
            loading={loading}
            duration={0.25}
            delay={0}
          />
          <h2>{product.name}</h2>
        </div>
        <div className='products__data-cont'>
          <ul className='info__cont'>
            {product.info.map((item, index) => (
              <li key={index}>
                <Curtain
                  loading={loading}
                  duration={0.25}
                  delay={0.05 * index}
                />
                <p><span>{item.title}:</span> {item.value}</p>
              </li>
            ))}
          </ul>
          <div className='products__data-desc'>
            <Curtain
              loading={loading}
              duration={0.25}
              delay={0.05 * (infoCount + 1)}
            />
            <p className='desc'>{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
