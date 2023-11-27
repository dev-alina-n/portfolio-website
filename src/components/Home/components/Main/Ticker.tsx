import Typical from 'react-typical';
import { useTranslation } from 'react-i18next';
import classes from './Main.module.css';

const TYPICAL_STEPS: Array<number | string> = [
    'Фронтенд разработчик 💻',
    1000,
    'Реакт разработчик 🌐',
    1000,
    'Джаваскрипт разработчик 🖥️',
    1000,
];

const Ticker = () => {
    const { t, i18n } = useTranslation();
    const steps = TYPICAL_STEPS
        .map((el) => (typeof el === 'string' ? t(el) : el));

    return (
        <div className={classes.tickerContainer}>
            <span className={classes.primaryText}>
                <h1 key={i18n.language}>
                    <Typical
                        loop={Infinity}
                        steps={steps}
                    />
                </h1>
            </span>
        </div>
    );
};

export default Ticker;
