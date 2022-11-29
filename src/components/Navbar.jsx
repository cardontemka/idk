import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Navbar.module.css'
import logo from "../assets/images/team.png";
import { useContext, useState } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const routes = [
    { name: "Products", to: "products" },
    { name: "Services", to: "services" },
    { name: "Contacts", to: "contact" },
    { name: "Log in", to: "login" },
];

export const Navbar = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const [bar, setBar] = useState();
    const [lastScrollTop, setLastScrollTop] = useState();
    document.addEventListener('scroll', () => {
        if (document.body.scrollTop > lastScrollTop || document.documentElement.scrollTop > lastScrollTop) {
            setBar(true)
        } else {
            setBar(false)
        }
        setLastScrollTop(document.body.scrollTop || document.documentElement.scrollTop)
    })
    return (
        <div className={`${styles.headContain} ${bar ? styles.hideBar : styles.showBar}`}>
            <Link to='/'>
                <img src={logo} className={styles.logo} />
            </Link>
            <div className={styles.links}>
                {isDark ? <MdDarkMode className={`${styles.toggle} ${styles.dark}`} onClick={toggleTheme} /> : <MdLightMode className={`${styles.toggle} ${styles.light}`} onClick={toggleTheme} />}
                {routes.map(({ name, to }) => (
                    <Link to={to} key={name} className={styles.link}>{name}</Link>
                ))}
                <Link to='getaccess' className={styles.getButton}>Get Access</Link>
            </div>
        </div>
    );
};
