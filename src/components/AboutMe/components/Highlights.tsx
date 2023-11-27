import { v4 as uuid } from 'uuid';
import { useTranslation } from 'react-i18next';
import classes from './Highlights.module.css';
import { SCREEN_DESCRIPTION } from '../aboutData';

const Highlights = () => {
    const { t } = useTranslation();

    return (
        <div>
            {SCREEN_DESCRIPTION.bullets.map((value) => (
                <div className={classes.highlight} key={uuid()}>
                    <div className={classes.highlightBlob} />
                    <span>{t(value)}</span>
                </div>
            ))}
        </div>
    );
};

export default Highlights;
