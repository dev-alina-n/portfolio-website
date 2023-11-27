import { useTranslation } from 'react-i18next';
import CategoryTitle from 'components/common/CategoryTitle/CategoryTitle';
import Buttons from 'components/common/Buttons/Buttons';
import classes from './Testimonial.module.css';

const description: string = 'Эксперт в использовании таких технологий как React, Styled Components и Node.js. Алина имеет глубокое понимание всех этих технологий и может использовать их для решения проектных задач.';
const Testimonial = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.testimonialContainer} id="testimonial">
            <div className={classes.testimonialParent}>
                <CategoryTitle title="Рекомендательное письмо" />
                <div className={classes.testimonialCard}>
                    <div className={classes.testimonialContent}>
                        <i className="fa fa-quote-left" />
                        <p className={classes.textContainer}>
                            {t(description)}
                        </p>
                        <i className={`fa fa-quote-right ${classes.quoteRight}`} />
                        <div className={classes.btnContainer}>
                            <Buttons buttonTitle="Скачать письмо" link="testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;
