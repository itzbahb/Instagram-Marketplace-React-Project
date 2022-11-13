import React from 'react'
import Seller from './Seller'

export default function SellerList({ listOfSellers }) {
  return (
    <div className='listings'>
      {listOfSellers.map(seller => (
        <Seller
          key={seller.userId}
          seller={seller}
        />
      ))}
    </div>
  )
}
