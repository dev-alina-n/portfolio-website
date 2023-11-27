import { useTranslation } from 'react-i18next';
import CategoryTitle from 'components/common/CategoryTitle/CategoryTitle';
import classes from './AboutMe.module.css';
import { SCREEN_DESCRIPTION } from './aboutData';
import Highlights from './components/Highlights';

function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className={classes.aboutContainer} id="about">
            <div className={classes.aboutParent}>
                <CategoryTitle title="Обо мне" />
                <div className={classes.aboutDetails}>
                    <span className={classes.aboutDescription}>
                        {t(SCREEN_DESCRIPTION.description)}
                    </span>
                    <div className={classes.aboutHighlights}>
                        <div className={classes.highlightHeading}>
                            <span>{t(SCREEN_DESCRIPTION.heading)}</span>
                        </div>
                        <div>
                            <Highlights />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
