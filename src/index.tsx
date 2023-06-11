import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../config/i18n/i18n';
import ThemeProvider from 'theme/ThemeProvider';
import App from './App';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
