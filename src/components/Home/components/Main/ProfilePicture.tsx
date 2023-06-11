import classes from './Main.module.css';
import {useTheme} from 'theme/useTheme';

const ProfilePicture = () => {
    const {isClassicTheme, toggleTheme} = useTheme();
    const pictureClassName = isClassicTheme ? `${classes.profilePictureClassic}` : `${classes.profilePictureShrek}`;

    return (
        <div className={classes.profilePicture}>
            <div
                role="presentation"
                onClick={toggleTheme}
                className={pictureClassName}
            />
        </div>
    );
};

export default ProfilePicture;
