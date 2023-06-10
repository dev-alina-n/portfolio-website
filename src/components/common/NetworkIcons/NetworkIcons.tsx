import classes from './NetworkIcons.module.css';

const NetworkIcons = () => (
    <div className={classes.iconsContainer}>
        <a href="https://github.com/dev-alina-n" target="_blank" rel="noreferrer">
            <i className="fa fa-github" />
        </a>
        <a
            href="https://api.whatsapp.com/send?phone=79672376006"
            target="_blank"
            rel="noreferrer"
        >
            <i className="fa fa-whatsapp" />
        </a>
        <a href="https://t.me/dev_alina" target="_blank" rel="noreferrer">
            <i className="fa fa-telegram" />
        </a>
    </div>
);

export default NetworkIcons;
