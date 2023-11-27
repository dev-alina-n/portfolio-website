import { createContext } from 'react';

export enum THEME {
    CLASSIC = 'classic',
    SHREK = 'shrek',
}

export interface ThemeContextProps {
    theme?: THEME;
    setTheme?: (theme: THEME) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
