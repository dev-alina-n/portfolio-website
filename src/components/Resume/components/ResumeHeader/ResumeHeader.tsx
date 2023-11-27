import { useTranslation } from 'react-i18next';
import classes from './ResumeHeader.module.css';
import resumeClasses from '../../Resume.module.css';

interface ResumeHeaderProps {
    title?: string;
    subtitle?: string;
    description?: string;
    fromDate?: number;
    toDate?: number;
}

const ResumeHeader = (props: ResumeHeaderProps) => {
    const { t } = useTranslation();
    const {
        title, subtitle, description, fromDate, toDate,
    } = props;

    return (
        <div className={classes.resumeHeading}>
            <div className={classes.resumeMainHeading}>
                <div className={resumeClasses.headingBullet} />
                {title && <span>{t(title)}</span>}
                {fromDate && toDate && (
                    <div className={classes.headingDate}>
                        {`${fromDate}-${toDate}`}
                    </div>
                )}
            </div>
            {subtitle && (
                <div className={classes.resumeSubheading}>
                    <span>{t(subtitle)}</span>
                </div>
            )}
            {description && (
                <div className={classes.resumeHeadingDescription}>
                    <span>{t(description)}</span>
                </div>
            )}
        </div>
    );
};

export default ResumeHeader;
