import React from 'react'

const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {

 // if (soldOut === true) {
 //  return (
 //   <li className='pizza sold-out'>
 //    <img src={photoName} alt={name} />
 //    <div>
 //     <h3>{name}</h3>
 //     <p>{ingredients}</p>
 //     <span>{price}₹</span>
 //    </div>
 //   </li>
 //  )
 // }

 return (
  <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
   <img src={photoName} alt={name} />
   <div>
    <h3>{name}</h3>
    <p>{ingredients}</p>
    <span>{soldOut ? 'SOLD OUT' : price}₹</span>
   </div>
  </li>
 )
}

export default Pizza