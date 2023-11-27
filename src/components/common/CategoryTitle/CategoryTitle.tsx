import { useTranslation } from 'react-i18next';
import classes from './CategoryTitle.module.css';

interface CategoryTitleProps {
    title?: string;
    subtitle?: string;
}

const CategoryTitle = (props: CategoryTitleProps) => {
    const { t } = useTranslation();
    const { title, subtitle } = props;

    return (
        <div className={classes.headingContainer}>
            <div className={classes.screenHeading}>
                <span>{t(title)}</span>
            </div>
            {subtitle
                && (
                    <div className={classes.screenSubheading}>
                        <span>
                            {t(subtitle)}
                        </span>
                    </div>
                )}

            <div className={classes.headingSeparator}>
                <div className={classes.separatorLine}>
                    <div className={classes.separatorBlob}>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTitle;
