import classes from './ResumeDetails.module.css';
import ProgrammingSkills from './ProgrammingSkills';
import { RESUME_DETAILS_TYPE } from '../../resumeDataTypes';
import WorkExperience from './WorkExperience';

interface ResumeDetailsProps {
    detailToDisplay: string;
}

const ResumeDetails = ({ detailToDisplay }: ResumeDetailsProps) => (
    <div className={classes.resumeDetailsContainer}>
        <div className={classes.resumeDetailsList}>
            {detailToDisplay === RESUME_DETAILS_TYPE.SKILLS && <ProgrammingSkills />}
            {detailToDisplay === RESUME_DETAILS_TYPE.WORK && <WorkExperience />}
        </div>
    </div>
);

export default ResumeDetails;
