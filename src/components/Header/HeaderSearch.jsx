import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { searchMovie, searchSoonMovie } from '../../redux/actions/movie.action';

const HeaderSearch = () => {
    const [searchValue, setSearchValue] = useState('');
    const listSearchFilm = useSelector((state) => state.movie.listMovieSearch);
    const listSoonMovie = useSelector((state) => state.movie.listSoonMovie);
    console.log(listSoonMovie);
    const [stateFilm, setStateFilm] = useState('dangchieu');
    const dispatch = useDispatch();

    useEffect(() => {
        if (stateFilm === 'dangchieu') {
            if (searchValue.length > 0) {
                var timeout = setTimeout(
                    () => dispatch(searchMovie(searchValue)),
                    500
                );
            } else {
                dispatch({
                    type: 'CLEAR_LIST_SEARCH_FILM',
                });
            }
        } else {
            if (searchValue.length > 0) {
                timeout = setTimeout(
                    () => dispatch(searchSoonMovie(searchValue, listSoonMovie)),
                    500
                );
            } else {
                dispatch({
                    type: 'CLEAR_LIST_SEARCH_FILM',
                });
            }
        }
        return () => {
            dispatch({
                type: 'CLEAR_LIST_SEARCH_FILM',
            });
            clearTimeout(timeout);
        };
    }, [searchValue, dispatch, stateFilm, listSoonMovie]);

    const onChaneSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearchValue = () => {
        setSearchValue('');
    };

    const renderSearchMovie = () => {
        return (
            listSearchFilm &&
            listSearchFilm.map((item, index) => {
                return (
                    <li key={index} onClick={clearSearchValue}>
                        <Link to={`/phim/${item.biDanh}-${item.maPhim}`}>
                            {item.tenPhim}
                        </Link>
                    </li>
                );
            })
        );
    };

    const handleChangeStateFilm = (e) => {
        setStateFilm(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="header-search">
            <select
                className="header-search-select"
                value={stateFilm}
                onChange={handleChangeStateFilm}
            >
                <option value="dangchieu">Đang chiếu</option>
                <option value="sapchieu">Sắp chiếu</option>
            </select>
            <input
                value={searchValue}
                onChange={(e) => onChaneSearchValue(e)}
                className="header-search-input"
                type="text"
                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
            />
            <i className="fa fa-search header-search-icon"></i>
            <ul className="header-search-result">{renderSearchMovie()}</ul>
        </div>
    );
};

export default HeaderSearch;
