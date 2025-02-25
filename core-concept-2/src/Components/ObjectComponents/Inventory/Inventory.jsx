import React, { useState } from 'react'

const Inventory = () => {
  const [product, setProduct] = useState({
    name: 'Laptop',
    stock: 10
  })

  const increseStock = () => {
    setProduct({
      ...product,
      stock: product.stock + 1
    })
  }

  const decreseStock = () => {
    if (product.stock > 0) {
      setProduct({
        ...product,
        stock: product.stock - 1
      })
    }
  }
  return (
    <div>
      <p>{product.name}</p>
      <p>Available: {product.stock}</p>
      <button onClick={increseStock} className='bg-amber-300 px-6 py-2 mr-2'>Increse Product</button>
      <button onClick={decreseStock} className='bg-fuchsia-300 px-6 py-2'>Increse Product</button>
    </div>
  )
}

export default Inventory
