import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [{
        id: 1,
        price: 99,
        title: 'Watch',
        qty: 1,
        img: ''
      },
      {
        id: 2,
        price: 999,
        title: 'Mobile Phone',
        qty: 1,
        img: ''
      },
      {
        id: 3,
        price: 9999,
        title: 'Laptop',
        qty: 1,
        img: ''
      }
      ]
    }

  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })

    console.log(products[index].title, products[index].qty);
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty > 1) {
      products[index].qty -= 1;
    }

    this.setState({
      products: products
    })

    console.log(products[index].title, products[index].qty);
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })

    console.log(products);
  }

  getCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }


  render() {
    const { products } = this.state;
    return (
      <div className="App" >
        <Navbar
          count={this.getCount()}
        />
        <Cart
          products={products}
          key={products.id}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
