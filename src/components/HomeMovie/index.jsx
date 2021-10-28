import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import Footer from '../Footer';
import ListMovies from '../ListMovies';
import '../Header/style.css';

const HomeMovie = () => {
    return (
        <>
            <div className="header">
                <HeaderContainer />
            </div>
            <div className="section-container">
                <ListMovies />
                <div className="pb-80" style={{ paddingBottom: '80px' }}></div>
            </div>
            <Footer />
        </>
    );
};

export default HomeMovie;
