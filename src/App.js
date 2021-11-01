import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeMovie from './components/HomeMovie';
import Home from './components/Home';
import DetailMovie from './components/DetailMovie';
import Booking from './components/Booking';
import { getMovieSoon } from './redux/actions/moviesoon.action';
import ScrollToTop from './components/ScrollToTop';
function App() {
    const credentialStr = localStorage.getItem('credentials');
    const dispatch = useDispatch();

    const _getMovieSoon = () => {
        dispatch(getMovieSoon());
    };

    const _getCredentialFromLocal = () => {
        if (credentialStr) {
            dispatch({
                type: 'FETCH_CREDENTIAL',
                payload: JSON.parse(credentialStr),
            });
        }
    };

    useEffect(() => {
        _getMovieSoon();
        _getCredentialFromLocal();
    }, []);

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/dat-ve/:maLichChieu">
                        <Booking />
                    </Route>
                    <Route
                        path="/phim"
                        exact={true}
                        component={HomeMovie}
                    ></Route>
                    <Route path="/phim/:tenPhim:maPhim">
                        <DetailMovie />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
