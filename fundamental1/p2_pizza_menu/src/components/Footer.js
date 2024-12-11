import React from 'react'

const Footer = () => {
 const hour = new Date().getHours();
 const openHour = 10;
 const closeHour = 22;
 const isOpen = hour >= openHour && hour <= closeHour;

 return (
  <footer className='footer'>
   {isOpen && (
    <p >We're open until {closeHour}:00. Come visit us or order online.</p>
   )}
   {!isOpen && (
    <p className='sliding-text'>We're CLOSED now.Please visit tomorrow {openHour}:00</p>
   )}
  </footer>
 )
}

export default Footer