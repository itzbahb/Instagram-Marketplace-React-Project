import React from 'react'
import Seller from './Seller'

export default function SellerList({ sellers }) {
  return (
    <div className='listings'>
      {sellers.map(seller => (
        <Seller
          key={seller.userId}
          seller={seller}
        />
      ))}
    </div>
  )
}
