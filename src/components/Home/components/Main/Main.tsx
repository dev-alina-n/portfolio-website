import {useTranslation} from 'react-i18next';
import classes from './Main.module.css';
import NetworkIcons from 'components/common/NetworkIcons/NetworkIcons';
import ProfilePicture from './ProfilePicture';
import Buttons from 'components/common/Buttons/Buttons';
import Ticker from './Ticker';

const GREETINGS = 'Привет, меня зовут';

const Main = () => {
    const {t} = useTranslation();

    return (
        <div className={classes.profileContainer}>
            <div className={classes.profileDetails}>
                <NetworkIcons/>
                <div className={classes.profileDetailsName}>
                    <span className={classes.primaryText}>
                        {t(GREETINGS)}
                        <span className={classes.highlightedText}>
                            {t('Алина')}
                        </span>
                    </span>
                </div>
                <Ticker/>
                <Buttons displayBtn buttonTitle="Скачать резюме" link="resume"/>
            </div>
            <ProfilePicture/>
        </div>
    );
};

export default Main;
