import { v4 as uuid } from 'uuid';
import classes from './ResumeDetails.module.css';
import { programmingSkillsDetails } from '../../resumeData';

const ProgrammingSkills = () => (
    <div className={`${classes.resumeScreenContainer} ${classes.programmingSkillsContainer}`}>
        {programmingSkillsDetails.map((data) => (
            <div className={classes.skillParent} key={uuid()}>
                <div className={classes.skillTitleContainer}>
                    <div className={classes.headingBullet} />
                    <span>{data.skill}</span>
                </div>

                <div className={classes.skillPercentage}>
                    <div
                        className={classes.activePercentageBar}
                        style={{ width: `${data.ratingPercentage}%` }}
                    />
                </div>
            </div>
        ))}
    </div>
);

export default ProgrammingSkills;
