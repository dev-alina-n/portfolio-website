import { useTranslation } from 'react-i18next';
import classes from './LanguageBtn.module.css';

const LanguageBtn = () => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

    return (
        <button type="button" onClick={toggleLanguage} className={classes.languageBtn}>
            {t('Поменять язык')}
        </button>
    );
};

export default LanguageBtn;
