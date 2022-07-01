import React, { Component } from 'react'

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'mouse',
                    name: 'Mouse'
                },
                {
                    key: 'pc',
                    name: 'Computer'
                },
                {
                    key: 'monitor',
                    name: 'Monitor'
                }
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(element => (
            <div className='categories__item' key={element.key}>
                {element.name}
            </div>
        ))}
      </div>
    )
  }
}
