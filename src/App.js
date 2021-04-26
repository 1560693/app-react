import { Route } from 'react-router';
import './App.css';
import './dark-mode.css';
import Header from './components/header/pages';
import Loader from './components/loader/loader';

function App() {
    return (
        <div className="App site-wrapper">
            <Loader />
            <Header />
            <div>body</div>
            {/* <Route path="/header" component={Header} /> */}
            <div>Footer</div>
        </div>
    );
}

export default App;
