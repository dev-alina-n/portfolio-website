import { v4 as uuid } from 'uuid';
import classes from './ResumeDetails.module.css';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import { workExperienceDetails } from '../../resumeData';

const WorkExperience = () => (
    <div className={classes.resumeScreenContainer}>
        {workExperienceDetails.map((data) => (
            <div key={uuid()}>
                <ResumeHeader
                    key={uuid()}
                    title={data.title}
                    subtitle={data.subtitle}
                    description={data.description}
                    toDate={data.toDate}
                    fromDate={data.fromDate}
                />
            </div>
        ))}
    </div>
);

export default WorkExperience;
