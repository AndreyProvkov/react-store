import React, { Component } from 'react'

export default class item extends Component {
  render() {
    return (
      <div className='main__item item'>
        <h3 className='item__title'>{this.props.item.title}</h3>
        <p className='item__description'>{this.props.item.description}</p>
        <div className='item__price'>{this.props.item.price}</div>
        <div className='add-btn'>+</div>
      </div>
    )
  }
}
