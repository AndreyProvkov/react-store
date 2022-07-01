import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"

export default function Header() {
  let [bascketOpen, setBascketOpen] = useState(false);

  return (
    <header className='header'>
        <div className='header__name'>Name Cmpny</div>
        <nav className='header__nav'>
          <ul className='header__menu menu'>
            <li className='menu__item'>First item</li>
            <li className='menu__item'>Second item</li>
            <li className='menu__item'>Third item</li>
          </ul>
          <FaShoppingCart onClick={() => setBascketOpen(bascketOpen = !bascketOpen)} className={`bascket ${bascketOpen && 'bascket_active'}`} />
        </nav>
        {bascketOpen && (<div className='bascket__window'></div>)}
    </header>
  )
}
