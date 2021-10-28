import axios from 'axios';

export function getBookingRequest() {
    return (dispatch) => {
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
            )
            .then((res) => {
                dispatch(getCinemaListSuccess(res.data));
            })
            .catch((err) => {
                getCinemaListFailed(err);
            });
    };
}

function getCinemaListSuccess(cinema) {
    return {
        type: 'GET_CINEMA_LIST_SUCCESS',
        payload: cinema,
    };
}

function getCinemaListFailed(error) {
    return {
        type: 'GET_CINEMA_LIST_FAILED',
        payload: error,
    };
}

export function actionDetailLocation(maHeThongRap) {
    return (dispatch) => {
        axios
            .get(
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
            )
            .then((res) => {
                dispatch(GetListDetailLocationSuccess(res.data));
            })
            .catch((err) => {
                dispatch(GetListDetailLocationFalse(err));
            });
    };
}

function GetListDetailLocationSuccess(cinemaLocation) {
    return {
        type: 'GET_CINEMA_DETAIL_SUCCESS',
        payload: cinemaLocation,
    };
}

function GetListDetailLocationFalse(error) {
    return {
        type: 'GET_CINEMA_DETAIL_FALSE',
        payload: error,
    };
}

export function actionGetListMovieByLocation(maHeThongRap) {
    return (dispatch) => {
        axios
            .get(
                `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`
            )
            .then((res) => {
                dispatch(GetListMovieByLocationSuccess(res.data));
            })
            .catch((err) => {
                GetListMovieByLocationFalse(err);
            });
    };
}

function GetListMovieByLocationSuccess(cinemaLocation) {
    return {
        type: 'GET_LIST_MOVIE_DETAIL_BY_LOCATION_SUCCESS',
        payload: cinemaLocation,
    };
}

function GetListMovieByLocationFalse(err) {
    return {
        type: 'GET_LIST_MOVIE_FALSE',
        payload: err,
    };
}
