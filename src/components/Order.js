import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends Component {
  render() {
    return (
      <div className='bascket__item'>
        <img className='bascket__img' src={`./img/${this.props.item.img}`} />
        <h3 className='bascket__title'>{this.props.item.title}</h3>
        <div className='bascket__price'>Cost: {this.props.item.price}</div>
        <FaTrash className='bascket__trash' onClick={() => {this.props.onDelete(this.props.item.id)}}/>
      </div>
    )
  }
}
