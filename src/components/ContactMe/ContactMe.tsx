import React, {useRef, useState} from 'react';
import emails from '@emailjs/browser';
import Typical from 'react-typical';
import {useTranslation} from 'react-i18next';
import classes from './ContactMe.module.css';
import CategoryTitle from 'components/common/CategoryTitle/CategoryTitle';
import NetworkIcons from 'components/common/NetworkIcons/NetworkIcons';

const EMAIL_DETAILS_TYPE = {
    SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
};

const TYPICAL_STEP: Array<number | string> = [
    'Отправить мне письмо 📧',
    1000,
];

const ContactMe = () => {
    const {t, i18n} = useTranslation();

    const [btnLoading, setBtnLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const emailForm = useRef(null);

    const steps = TYPICAL_STEP
        .map((el) => (typeof (el) === 'string' ? t(el) : el));

    const sendEmail = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setErrorMsg('');
        setBtnLoading(true);

        emails.sendForm(
            EMAIL_DETAILS_TYPE.SERVICE_ID,
            EMAIL_DETAILS_TYPE.TEMPLATE_ID,
            emailForm.current,
            EMAIL_DETAILS_TYPE.PUBLIC_KEY,
        )
            .then(() => {
                emailForm.current.reset();
            }, (error) => {
                setErrorMsg(error.text);
            })
            .finally(() => setBtnLoading(false));
    };

    return (
        <div className={classes.contactContainer} id="contact">
            <CategoryTitle title="Связаться со мной"/>
            <div className={classes.centralForm}>
                <div className={classes.col}>
                    <h2 className="title" key={i18n.language}>
                        <Typical loop={Infinity} steps={steps}/>
                    </h2>
                    <NetworkIcons/>
                </div>
                <div className={classes.backForm}>
                    <div className={classes.imgBack}>
                        <img src="/assets/background/mails.jpeg" alt="oops"/>
                    </div>
                    <form ref={emailForm} onSubmit={sendEmail}>
                        <label htmlFor="name">
                            {t('Имя')}
                            <input type="text" placeholder={t('Имя')} name="user_name" minLength={2} required/>
                        </label>

                        <label htmlFor="email">
                            {t('Электронная почта')}
                            <input
                                type="email"
                                placeholder={t('Электронная почта')}
                                name="user_email"
                                required
                                pattern="\S+@[a-z]+.[a-z]+"
                            />
                        </label>

                        <label htmlFor="message">
                            {t('Сообщение')}
                            <textarea name="message" rows={8} required minLength={20}/>
                        </label>

                        {errorMsg && <span className={classes.errorMsg}>{errorMsg}</span>}

                        <div className="send-btn">
                            <button type="submit" disabled={btnLoading}>
                                {btnLoading ? t('Отправка') : t('Отправить')}
                                <i className={btnLoading ? `fa fa-spinner ${classes.loading}` : 'fa fa-paper-plane'}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
