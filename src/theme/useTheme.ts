import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    isClassicTheme: boolean;
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    const isClassicTheme = theme === THEME.CLASSIC;
    const toggleTheme = () => {
        const newTheme = isClassicTheme ? THEME.SHREK : THEME.CLASSIC;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        isClassicTheme,
        toggleTheme,
    };
};
