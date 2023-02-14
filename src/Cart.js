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

    render() {
        const { products } = this.state;
        return (

            <div className="cart">

                {products.map((product) => {
                    return <CartItem product={product} key={product.id} />
                })}

            </div>


        );
    }
}



export default Cart;