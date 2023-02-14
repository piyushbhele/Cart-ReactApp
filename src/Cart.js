import CartItem from "./CartItem";

import React from 'react';

class Cart extends React.Component {

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

    render() {
        const { products } = this.state;
        return (

            <div className="cart">

                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                })}

            </div>


        );
    }
}



export default Cart;