import React, { Component } from 'react'

export default class ModalItem extends Component {
  render() {
    return (
      <div className='modal' onClick={this.props.modalToggleActive}>
        <div className='modal__content'>
            <img className='modal__img' src={`./img/${this.props.selectedItem.img}`} />
            <div className='modal__info'>
                <h3 className='modal__title'>{this.props.selectedItem.title}</h3>
                <p className='modal__description'>{this.props.selectedItem.description}</p>
                <div className='modal__price'>Cost: {this.props.selectedItem.price}</div>
                <div className='modal__btn add-btn' onClick={(e) => this.props.addItem(e, this.props.selectedItem)}>+</div>
            </div>
        </div>
      </div>
    )
  }
}
