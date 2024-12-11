import React from 'react'

const Button = ({ orderHandler }) => {
 return (
  <button className='btn' onClick={orderHandler}>Order</button>
 )
}

export default Button