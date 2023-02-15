import React from 'react';

const CartItem = (props) => {

    const { price, title, qty, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price} </div>
                <div style={{ color: '#777' }}>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase"
                        onClick={() => onIncreaseQuantity(product)}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                    />

                    <img alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                    />

                    <img alt="delete"
                        onClick={() => onDeleteProduct(product.id)}
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    />
                </div>
            </div>
        </div>
    );

}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;