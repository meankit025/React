import React from 'react'
import Pizza from './Pizza'
import data from '../data'
import Button from './Button';

const Menu = () => {
 const pizzaData = data;
 const deleteSoldOutPizza = pizzaData.filter((pizza) => (pizza.soldOut !== true))

 const orderHandler = (e) => {

 }
 return (
  <main className='menu'>

   <h2>Our Menu</h2>
   {pizzaData.length > 0 ? <p>Authentic Italian cuisine, {deleteSoldOutPizza.length} creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
    : <p>We are Sorry 🙏</p>}
   <ul className='pizzas'>
    {pizzaData.length > 0 && pizzaData.map(pizza => (
     <Pizza soldOut={pizza.soldOut} key={pizza.name} name={pizza.name} photoName={pizza.photoName} price={pizza.price} ingredients={pizza.ingredients} />
    ))}
   </ul>

   <div className='order'>
    <Button orderHandler={orderHandler} />
   </div>
  </main>
 )
}

export default Menu