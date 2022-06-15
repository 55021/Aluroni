import React from 'react';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];

    return (
        <nav className={styles.menu}>
            <Logo/>
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>{rota.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;