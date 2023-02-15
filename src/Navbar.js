import React from 'react';

const Navbar = (props) => {
    const { products } = props;
    return (

        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/3144/3144456.png' />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>


    );

}

const styles = {
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIcon: {
        height: 32,
        marginRight: 30
    },
    cartIconContainer: {
        position: 'relative'
    },

    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 10,
        top: -9
    }
}



export default Navbar;