import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.CLASSIC;
const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);
    const defaultProps = useMemo(() => {
        document.body.className = theme;
        return {
            theme,
            setTheme,
        };
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
