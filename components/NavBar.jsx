import React from 'react'
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
const NavBar = () => {
  return (
    <div className='navbar-container'>
      <p>
        <Link href="/">Tech Products</Link>
      </p>
      <button type='button'
       className='cart-icon'
       >
      <ShoppingCart />
      <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}

export default NavBar
