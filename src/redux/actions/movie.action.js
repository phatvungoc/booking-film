import axios from 'axios';
import { startLoading, stopLoading } from './common.action';

export function getMovieListRequest() {
    return (dispatch) => {
        //starting loading
        dispatch(startLoading());
        //call api
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03'
            )
            .then((res) => {
                dispatch(getMovieListSuccess(res.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getMovieListFailed(error));
                // stop loading
                dispatch(stopLoading());
            });
    };
}

function getMovieListSuccess(movieList) {
    return {
        type: 'GET_MOVIE_LIST_SUCCESS',
        payload: movieList,
    };
}

function getMovieListFailed(error) {
    return {
        type: 'GET_MOVIE_LIST_FAILED',
        payload: error,
    };
}

export function actGetListDetailFilm(id) {
    return (dispatch) => {
        //call id
        if (id) {
            axios
                .get(
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
                )
                .then((res) => {
                    dispatch(getListDetailHome(res.data));
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };
}

function getListDetailHome(film) {
    return {
        type: 'GET_LIST_DETAIL_HOME',
        payload: film,
    };
}

//search Movie
export function searchMovie(keyword) {
    return (dispatch) => {
        if (keyword) {
            axios
                .get(
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&tenPhim=${keyword}&soTrang=1&soPhanTuTrenTrang=10000`
                )
                .then((res) => {
                    dispatch(getListSearchFilm(res.data.items));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };
}

function getListSearchFilm(film) {
    return {
        type: 'LIST_SEARCH_FILM',
        payload: film,
    };
}

//search Soon Movie
export function searchSoonMovie(keyword, listSoonMovie) {
    return (dispatch) => {
        if (keyword) {
            const listMovie = listSoonMovie.filter((movie) =>
                movie.tenPhim.toLowerCase().includes(keyword.toLowerCase())
            );
            dispatch(getListSearchMovieSoon(listMovie));
        }
    };
}

function getListSearchMovieSoon(listFilm) {
    return {
        type: 'LIST_SEARCH_SOON_FILM',
        payload: listFilm,
    };
}
