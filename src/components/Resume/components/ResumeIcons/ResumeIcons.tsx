import { useTranslation } from 'react-i18next';
import { resumeBullets } from '../../resumeData';
import classes from './ResumeIcons.module.css';
import { RESUME_DETAILS_TYPE } from '../../resumeDataTypes';

interface ResumeIconsProps {
    onIconClick: (flag: RESUME_DETAILS_TYPE) => void;
    selectedItem: RESUME_DETAILS_TYPE;
}

const ResumeIcons = ({ onIconClick, selectedItem }: ResumeIconsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classes.iconsContainer}>
            <div className={classes.bulletIcon} />
            <div className={classes.iconsList}>
                {resumeBullets.map((data) => {
                    const isCurrentItem = selectedItem === data.key;
                    const toggleState = () => onIconClick(data.key);

                    return (
                        <div
                            role="presentation"
                            key={data.key}
                            className={classes.imageContainer}
                            onClick={toggleState}
                        >
                            <img
                                className={classes.logo}
                                src={`assets/svgIcons/${data.logoSrc}`}
                                alt="oops"
                            />
                            <span
                                className={
                                    isCurrentItem
                                        ? classes.highlightedIconLabel
                                        : classes.iconLabel
                                }
                            >
                                {t(data.label)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResumeIcons;
