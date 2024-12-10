import React from 'react';
import CartWidget from '../../common/cartWidget/CartWidget.jsx';
import './navbar.css'; // Importar el archivo de estilos

const NavBar = () => {
    return (
        <nav>
            <div className='nav__brand'>
                <h1>Mi Tienda</h1>
            </div>
            <ul className='nav__ul'>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="cart-widget">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;

