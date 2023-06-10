export enum RESUME_DETAILS_TYPE {
    SKILLS = 'skills',
    WORK = 'work',
}

export type ResumeBullet = {
    label: string;
    logoSrc: string;
    key: RESUME_DETAILS_TYPE;
}[];

export type ProgrammingSkillsDetail = {
    skill: string;
    ratingPercentage: number;
}[];

export type ResumeDetail = {
    title: string;
    subtitle: string;
    description?: string;
    fromDate?: number;
    toDate?: number;
}[];
