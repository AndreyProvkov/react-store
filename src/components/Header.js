import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

function showOrder(props) {
  return (
    <div className='bascket__items'>
      {props.order.map(element => (
        <Order key={element.id} item={element}/>
      ))}
    </div>
  )
}

function showEmptyBascket() {
  return (
    <h2 className='bascket__empty'>No items</h2>
  )
}

export default function Header(props) {
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
        {bascketOpen && (
          <div className='bascket__window'>
            {
              props.order.length > 0 ? showOrder(props) : showEmptyBascket()
            }
          </div>)}
    </header>
  )
}
