import axios from 'axios';

export function getMovieSoon() {
    return (dispatch) => {
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1361'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5125'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1481'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5178'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=5200'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
        axios
            .get(
                'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=6055'
            )
            .then((res) => {
                dispatch(getMovieSoonSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getMovieSoonFailed(err));
            });
    };
}

const getMovieSoonSuccess = (movie) => {
    return {
        type: 'POST-MOVIE-SOON_SUCCESS',
        payload: movie,
    };
};

const getMovieSoonFailed = (err) => {
    return {
        type: 'POST-MOVIE-SOON_FAILED',
        payload: err,
    };
};
