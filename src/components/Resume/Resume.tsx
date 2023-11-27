import { useState } from 'react';
import CategoryTitle from 'components/common/CategoryTitle/CategoryTitle';
import classes from './Resume.module.css';
import ResumeIcons from './components/ResumeIcons/ResumeIcons';
import ResumeDetails from './components/ResumeDetails/ResumeDetails';
import { RESUME_DETAILS_TYPE } from './resumeDataTypes';

const Resume = () => {
    const [
        componentToRender,
        setComponentToRender,
    ] = useState<RESUME_DETAILS_TYPE>(RESUME_DETAILS_TYPE.SKILLS);

    return (
        <div className={classes.resumeContainer} id="resume">
            <CategoryTitle title="Резюме" subtitle="Стэк и опыт работы" />
            <div className={classes.resumeCard}>
                <ResumeIcons
                    onIconClick={setComponentToRender}
                    selectedItem={componentToRender}
                />
                <ResumeDetails detailToDisplay={componentToRender} />
            </div>
        </div>
    );
};

export default Resume;
