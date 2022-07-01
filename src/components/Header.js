import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

function showOrder(props) {
  let sum = 0;
  props.order.forEach(element => sum += parseFloat(element.price));
  return (
    <div className='basket__items'>
      {props.order.map(element => (
        <Order key={element.id} item={element} onDelete={props.onDelete}/>
      ))}
      <div className='basket__sum'>
        Sum cost: {sum}
      </div>
    </div>
  )
}

function showEmptyBasket() {
  return (
    <h2 className='basket__empty'>No items</h2>
  )
}

export default function Header(props) {
  let [basketOpen, setBasketOpen] = useState(false);

  return (
    <header className='header'>
        <div className='header__name'>Name Cmpny</div>
        <nav className='header__nav'>
          <ul className='header__menu menu'>
            <li className='menu__item'>First item</li>
            <li className='menu__item'>Second item</li>
            <li className='menu__item'>Third item</li>
          </ul>
          <FaShoppingCart onClick={() => setBasketOpen(basketOpen = !basketOpen)} className={`basket ${basketOpen && 'basket_active'}`} />
        </nav>
        {basketOpen && (
          <div className='basket__window'>
            {
              props.order.length > 0 ? showOrder(props) : showEmptyBasket()
            }
          </div>)}
    </header>
  )
}
