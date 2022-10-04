import React from 'react'
import BasketItem from './BasketItem';

function Basket({basket}) {
  return (
    <>
    {
        basket.map(item => (
            <div>
                {basket.map(item => (
                    <BasketItem item = {item}/>
                ))}
            </div>
        ))
    }
    </>
  )
}

export default Basket;