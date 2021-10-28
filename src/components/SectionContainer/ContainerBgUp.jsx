import React, { useState } from 'react';
import ShowMovie from '../ShowMovie';
import SoonMovie from '../SoonMovie';

const ContainerBgUp = () => {
    const [soonMovie, setSoonMovie] = useState(false);
    const handleSoonMovie = () => {
        setSoonMovie(true);
    };
    const handleShowMovie = () => {
        setSoonMovie(false);
    };

    return (
        <div className="container-bg-up">
            <div className="container-film">
                <ul className="scmovie-tabs">
                    <li
                        className={soonMovie === false ? 'active-color' : ''}
                        onClick={handleShowMovie}
                    >
                        #Phim đang chiếu
                    </li>
                    <li
                        className={soonMovie === true ? 'active-color' : ''}
                        onClick={handleSoonMovie}
                    >
                        #Phim sắp chiếu
                    </li>
                </ul>
                <div className="scmovie-list">
                    {soonMovie === false ? <ShowMovie /> : <SoonMovie />}
                </div>
            </div>
        </div>
    );
};

export default ContainerBgUp;
