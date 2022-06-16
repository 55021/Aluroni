import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo/>
        </footer>
    );
};

export default Footer;