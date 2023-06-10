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
        skill: 'Styled-components',
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
        title: 'Avosend',
        subtitle: 'Стек технологий: React, Redux, Strapi, Node, Jest, Snapshot, HTML, CSS, Oracle SQL',
        fromDate: 2022,
        toDate: 2023,
        description: 'Написание Strapi api для неавторизованной зоны сайта. Перевод компонентов на styled LanguageBtn. Подключение аналитики (amplitude, mindbox). Написание snapshot и jest тестов. Фикс багов. Разработка новых страниц сайта. Разработка одностраничного сайта-лендинга pspay на html/css. Подключение AWS плагина для Strapi. Работа с макетами. Релиз-менеджмент (заполнение заявок на релиз, работа в команде с тестировщиком и девопсом, деплой).',
    },
    {
        title: 'Paysend',
        subtitle: 'Стек технологий: React, Redux, Strapi, Node, Jest, HTML, CSS',
        fromDate: 2021,
        toDate: 2022,
        description: 'Фикс багов. Подключение аналитики и написание для нее ивентов(amplitude). Актуализация jest тестов. Перевод компонентов на styled LanguageBtn. Разработка страниц для cloudflare ошибок на html/css. Перевод страниц неавторизованной зоны на Strapi api. Рефакторинг компонентов.',
    },
    {
        title: 'Elbrus',
        subtitle: 'Стек технологий: React, HTML, CSS, Node, Express, MongoDB',
        fromDate: 2021,
        toDate: 2021,
        description: 'Менторство. Помощь обучающимся на курсе по программированию.',
    },
];

export {
    resumeBullets,
    programmingSkillsDetails,
    workExperienceDetails,
};
