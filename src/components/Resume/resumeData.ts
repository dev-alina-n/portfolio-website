import {
    ProgrammingSkillsDetail, RESUME_DETAILS_TYPE, ResumeBullet, ResumeDetail,
} from './resumeDataTypes';

const resumeBullets: ResumeBullet = [
    {
        label: 'Навыки',
        logoSrc: 'programming-skills.svg',
        key: RESUME_DETAILS_TYPE.SKILLS,
    },
    {
        label: 'Опыт работы',
        logoSrc: 'work-history.svg',
        key: RESUME_DETAILS_TYPE.WORK,
    },
];

const programmingSkillsDetails: ProgrammingSkillsDetail = [
    {
        skill: 'Javascript',
        ratingPercentage: 90,
    },
    {
        skill: 'React',
        ratingPercentage: 80,
    },
    {
        skill: 'Redux',
        ratingPercentage: 80,
    },
    {
        skill: 'HTML',
        ratingPercentage: 85,
    },
    {
        skill: 'CSS',
        ratingPercentage: 85,
    },
    {
        skill: 'Typescript',
        ratingPercentage: 90,
    },
    {
        skill: 'Node',
        ratingPercentage: 60,
    },
    {
        skill: 'Strapi',
        ratingPercentage: 85,
    },
];

const workExperienceDetails: ResumeDetail = [
    {
        title: 'Beeline',
        subtitle: 'Стек технологий: Javascript, Typescript, React, MobX, Strapi, Node, HTML, SCSS, Pixso',
        fromDate: 2023,
        toDate: 2023,
        description: 'Реализовала раздел поддержки для мобильных договоров и внедрила чат Webim. Реализовала ивенты для Яндекс Метрики. Сверстала лендинг на html/css. Разработала «офферы» для клиентов и «подключенные продукты» на Strapi api.',
    },
    {
        title: 'Paysend',
        subtitle: 'Стек технологий: Javascript, React, Redux, Strapi, Node, Jest, HTML, CSS, Oracle SQL',
        fromDate: 2021,
        toDate: 2023,
        description: 'Подключила аналитику Amplitude и Mindbox и реализовала для нее ивенты. Перевела существующие и создала новые компоненты на styled components. Реализовала страницы ошибок для cloudflare на html/css. Перевела неавторизованную зону сайта на Strapi api. Актуализировала существующие и написала новые jest тесты. Разработала одностраничный сайт-лендинг PSPAY на html/css. Подключила AWS плагин для Strapi.',
    },
    {
        title: 'Elbrus',
        subtitle: 'Стек технологий: Javascript, React, HTML, CSS, Node, Express, MongoDB',
        fromDate: 2020,
        toDate: 2021,
        description: 'Менторство. Помощь обучающимся на курсе по программированию.',
    },
];

export {
    resumeBullets,
    programmingSkillsDetails,
    workExperienceDetails,
};
