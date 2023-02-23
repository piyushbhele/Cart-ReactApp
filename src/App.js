import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      products: [
        // {
        //   id: 1,
        //   price: 740,
        //   title: 'Royal Stag',
        //   qty: 1,
        //   img: 'https://file.bungki.com/eyJidWNrZXQiOiJidW5na2kiLCJrZXkiOiJwdWJsaWMv' +
        //     'c3RhdGljcy9pbWFnZXMvcHJvZHVjdHMvMjA4MjYvYi8xNjU5MzM4OTg5Njk4LmpwZyIsImVka' +
        //     'XRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjEwMjQsImhlaWdodCI6MTA' +
        //     'yNCwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0='
        // },
        // {
        //   id: 2,
        //   price: 1360,
        //   title: 'Blenders Pride',
        //   qty: 1,
        //   img: "https://www.delhicapital.com/wp-content/uploads/2022/10/Blenders-Pride-Price-in-Delhi-1024x666.jpg"
        // },
        // {
        //   id: 3,
        //   price: 2320,
        //   title: 'Teachers',
        //   qty: 1,
        //   img: 'https://cdn3.mydukaan.io/app/image/2000x2000/?url=https://mydukaan-prod-new.s3.amazonaws.com/214913/55ca609f-685b-4b07-a0de-c30a73d64500.png'
        // }
      ]
    }

  }

  // componentDidMount() {
  //   firebase
  //     .firestore()
  //     .collection('products')
  //     .get()
  //     .then((snapshot) => {
  //       console.log(snapshot);

  //       snapshot.docs.map((doc) => {
  //         console.log(doc.data());
  //       });

  //       const products = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data['id'] = doc.id;
  //         return data;
  //       });

  //       this.setState({
  //         products: products,
  //         loading: false
  //       });


  //     });

  // }

  componentDidMount() {
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false
        });


      });

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

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.forEach((product) => {
      total += product.price * product.qty;
    });

    return total;
  }


  render() {
    const { products, loading } = this.state;
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
        {loading && <h1>Loading</h1>}
        <div style={styles.total}>
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

const styles = {
  total: {
    fontSize: 20,
    color: '#954e11',
    fontWeight: 'bold',
    pading: 10,
    marginLeft: 20
  }
}


export default App;
