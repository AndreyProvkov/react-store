import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends Component {
  render() {
    return (
      <div className='basket__item'>
        <img className='basket__img' src={`./img/${this.props.item.img}`} />
        <h3 className='basket__title'>{this.props.item.title}</h3>
        <div className='basket__price'>Cost: {this.props.item.price}</div>
        <FaTrash className='basket__trash' onClick={() => {this.props.onDelete(this.props.item.id)}}/>
      </div>
    )
  }
}
