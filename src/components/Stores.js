import React from 'react'
import Store from './Store'

export default function Stores( { stores }) {
  return (
    <div className='listings'>
      {stores.map((store) => (
        <Store key={store.storeId} title={store.title} storeId={store.storeId} items={store.items} source={store.source}/>
      ))}
    </div>
  )
}
