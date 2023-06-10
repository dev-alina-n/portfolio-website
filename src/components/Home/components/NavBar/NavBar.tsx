import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NavBar.module.css';
import LanguageBtn from '../LanguageBtn/LanguageBtn';

const logoName = 'Alina~';

const NavBar = () => {
    const { t } = useTranslation();
    const [isMobileNavbar, setIsMobileNavbar] = useState(false);

    const toggleNavbar = () => {
        setIsMobileNavbar((prev) => !prev);
    };

    return (
        <div className={classes.navbarContainer}>
            <div role="presentation" className={classes.navbarHamburger} onClick={toggleNavbar}>
                <FontAwesomeIcon icon={faBars} className={classes.navbarHamburgerBars} />
            </div>
            <div className={classes.navbarLogo}>
                <span>{t(logoName)}</span>
            </div>
            <div
                role="presentation"
                onClick={toggleNavbar}
                className={isMobileNavbar
                    ? `${classes.headerOptions} ${classes.showHamburgerOptions}`
                    : `${classes.headerOptions}`}
            >
                <Link to="#about" smooth>{t('Обо мне')}</Link>
                <Link to="#resume" smooth>{t('Резюме')}</Link>
                <Link to="#testimonial" smooth>{t('Рекомендательное письмо')}</Link>
                <Link to="#contact" smooth>{t('Связаться со мной')}</Link>
                <LanguageBtn />
            </div>
        </div>
    );
};

export default NavBar;
