import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items';
import Categories from './components/Categories';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Computer 1',
          description: 'Powerful and quiet',
          category: 'pc',
          img: 'pc1.jpg',
          price: 4000
        },
        {
          id: 2,
          title: 'Computer 2',
          description: 'New technology',
          category: 'pc',
          img: 'pc2.jpg',
          price: 5000
        },
        {
          id: 3,
          title: 'Mouse 1',
          description: 'Click-click',
          category: 'mouse',
          img: 'mouse1.jpeg',
          price: 60
        },
        {
          id: 4,
          title: 'Monitor 1',
          description: 'Compact',
          category: 'monitor',
          img: 'monitor1.jpg',
          price: 580
        }
      ],
    };
    this.state.currentItems = this.state.items;
    this.addItemToBasket = this.addItemToBasket.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
  }

  render() {
    return (
      <div className='wrapper'>
        <Header order={this.state.order} onDelete={this.deleteItem}/>
        <Categories selectCategories={this.selectCategories}/>
        <Items items={this.state.currentItems} addItem={this.addItemToBasket} />
        <Footer />
      </div>
    )
  }

  selectCategories(category) {
    if (category === 'all') {
      this.setState({
        currentItems: this.state.items
      });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(element => {
        return element.category === category;
      })
    })
  }

  deleteItem(id) {
    this.setState({
      order: this.state.order.filter(element => {
        if (element.id !== id) {
          return true;
        }
      })
    });
  }

  addItemToBasket(item) {
    if (!this.state.order.includes(item)) {
      this.state.order.push(item);
      this.setState(state => ({
        order: state.order,
      }));
    }
  }
}