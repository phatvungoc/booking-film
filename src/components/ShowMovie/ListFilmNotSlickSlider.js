import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { getMovieListRequest } from '../../redux/actions/movie.action';
import CircularProgress from '@mui/material/CircularProgress';

const ListFilmNotSlickSlider = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListRequest());
    }, [dispatch]);

    console.log(props);

    const listTopMovie = (item) => {
        const newMovie = [];
        for (let i = 0; i < 5; i++) {
            newMovie.push(item[i]);
        }
        return newMovie;
    };

    if (props.isLoading === false) {
        return <CircularProgress />;
    } else {
        return (
            <>
                {props.movieList &&
                    listTopMovie(props.movieList).map((item, index) => {
                        return (
                            <Link
                                to={`/phim/${item.biDanh}-${item.maPhim}`}
                                className="film-link"
                                key={index}
                            >
                                <div className="film">
                                    <div className="film-image">
                                        <img
                                            src={item.hinhAnh}
                                            alt={item.tenPhim}
                                        />
                                    </div>
                                    <div className="film-description">
                                        <h2>{item.tenPhim}</h2>
                                        <p>{item.moTa}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        movieList: state.movie.movieList,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(ListFilmNotSlickSlider);
