import React from 'react'

function BasketItem({item}) {
  return (
    <div>
        {item.id} x {item.amount}
    </div>
  )
}

export default BasketItem;