import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import '../DetailMovie/styledetail.css';

const SoonFilmNotSlickSlider = (props) => {
    if (props.isLoading === false) {
        return <CircularProgress />;
    } else {
        return (
            <>
                {props.listSoonMovie &&
                    props.listSoonMovie.map((item, index) => {
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
        listSoonMovie: state.movie.listSoonMovie,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(SoonFilmNotSlickSlider);
