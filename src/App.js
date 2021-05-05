import { Route } from 'react-router';
import './App.css';
import './dark-mode.css';
import Header from './components/header/pages';
import Loader from './components/loader/loader';
import Banner from './components/banner';
import Module1 from './fetured/module-1';
import Module2 from './fetured/module-2/pages';
import Carousel_1 from './fetured/carousel-1/pages'
import Module3 from './fetured/module-3/pages';

function App() {
    return (
        <div className="App site-wrapper">
            <Loader />
            <Header />
            <Banner />
            <div className="site-content"> 
                <div className="container">
                    <Module1/>
                    <Module2/>
                    <Carousel_1 />
                    <Module3/>
                </div>
            </div>
            {/* <Route path="/header" component={Header} /> */}
            <div>Footer</div>
        </div>
    );
}

export default App;
