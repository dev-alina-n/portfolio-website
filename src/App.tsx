import './styles/index.css';
import { Suspense } from 'react';
import Home from 'components/Home/Home';
import AboutMe from 'components/AboutMe/AboutMe';
import Resume from 'components/Resume/Resume';
import Testimonial from 'components/Testimonial/Testimonial';
import ContactMe from 'components/ContactMe/ContactMe';

function App() {
    return (
        <Suspense fallback="">
            <Home />
            <AboutMe />
            <Resume />
            <Testimonial />
            <ContactMe />
        </Suspense>
    );
}

export default App;
