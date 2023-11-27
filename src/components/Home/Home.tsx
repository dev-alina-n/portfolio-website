import Main from './components/Main/Main';
import HomeFooter from './components/HomeFooter/HomeFooter';
import classes from './Home.module.css';
import NavBar from './components/NavBar/NavBar';

const Home = () => (
    <div className={classes.homeContainer} id="home">
        <NavBar />
        <Main />
        <HomeFooter />
    </div>
);

export default Home;
