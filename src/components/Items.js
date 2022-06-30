import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
  render() {
    return (
      <main className='main'>
        {
            this.props.items.map(element => (
                <Item key={element.id} item={element} />
            ))
        }
      </main>
    )
  }
}
