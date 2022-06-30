import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Title1',
          description: 'Description1',
          category: 'item1',
          price: 40
        },
        {
          id: 2,
          title: 'Title2',
          description: 'Description2',
          category: 'item2',
          price: 50
        },
        {
          id: 3,
          title: 'Title3',
          description: 'Description3',
          category: 'item1',
          price: 60
        },
        {
          id: 4,
          title: 'Title4',
          description: 'Description4',
          category: 'item3',
          price: 580
        }
      ],
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}