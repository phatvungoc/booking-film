import React from 'react';
import ShowMovie from '../ShowMovie';
import SoonMovie from '../SoonMovie';

const ListMovies = () => {
    return (
        <>
            <div className="container-film">
                <ul className="scmovie-tabs">
                    <li>#Phim đang chiếu</li>
                </ul>
                <div className="scmovie-list">
                    <ShowMovie />
                </div>
            </div>
            <div className="container-film" style={{ paddingTop: '30px' }}>
                <ul className="scmovie-tabs">
                    <li>#Phim sắp chiếu</li>
                </ul>
                <div className="scmovie-list">
                    <SoonMovie />
                </div>
            </div>
        </>
    );
};

export default ListMovies;
