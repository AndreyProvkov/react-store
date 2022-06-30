import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <div className='header__name'>Name Cmpny</div>
        <ul className='header__menu menu'>
            <li className='menu__item'>First item</li>
            <li className='menu__item'>Second item</li>
            <li className='menu__item'>Third item</li>
        </ul>
    </header>
  )
}
