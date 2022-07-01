import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items';
import Categories from './components/Categories';
import ModalItem from './components/ModalItem';

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
      selectedItem: {},
      modal: false
    };
    this.state.currentItems = this.state.items;
    this.addItemToBasket = this.addItemToBasket.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.selectCategories = this.selectCategories.bind(this);
    this.showModal = this.showModal.bind(this);
    this.modalToggleActive = this.modalToggleActive.bind(this);    
  }

  render() {
    return (
      <div className='wrapper'>
        <Header order={this.state.order} onDelete={this.deleteItem}/>
        <Categories selectCategories={this.selectCategories}/>
        <Items items={this.state.currentItems} addItem={this.addItemToBasket} showModal={this.showModal} modalToggleActive={this.modalToggleActive}/>
        {this.state.modal && 
          <ModalItem 
            addItem={this.addItemToBasket} 
            selectedItem={this.state.selectedItem} 
            modalToggleActive={this.modalToggleActive}/>}
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

  showModal(item) {
    this.setState({
      selectedItem: item
    });
  }

  modalToggleActive() {
    this.setState({
      modal: !this.state.modal
    });
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

  addItemToBasket(e, item) {
    if (!this.state.order.includes(item)) {
      this.state.order.push(item);
      this.setState(state => ({
        order: state.order,
      }));
    }
    e.stopPropagation();
  }
}