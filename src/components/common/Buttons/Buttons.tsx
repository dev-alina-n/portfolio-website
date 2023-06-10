import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import classes from './Buttons.module.css';

interface ButtonsProps {
    link: string;
    buttonTitle: string;
    displayBtn?: boolean;
}

const Buttons = (props: ButtonsProps) => {
    const { displayBtn, link, buttonTitle } = props;

    const { t } = useTranslation();

    return (
        <div className={classes.btnContainer}>
            {displayBtn && (
                <Link to="#contact" smooth>
                    <button type="button" className={`${classes.btn} ${classes.primaryBtn}`}>
                        {t('Связаться')}
                    </button>
                </Link>
            )}
            <a
                href={`/assets/docs/${link}.pdf`}
                download={`Alina N. ${link}`}
            >
                <button type="button" className={`${classes.btn} ${classes.highlightedBtn}`}>
                    {t(buttonTitle)}
                </button>
            </a>
        </div>
    );
};

export default Buttons;
