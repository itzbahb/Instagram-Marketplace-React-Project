import React from 'react'
import Store from './Store'

export default function Stores({ stores }) {
  return (
    <div className='listings'>
      {stores.map(store => (
        <Store
          key={store.storeId}
          store={store}
        />
      ))}
    </div>
  )
}
