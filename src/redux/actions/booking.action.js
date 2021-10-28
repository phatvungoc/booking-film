import axios from 'axios';

export function getBookingRequest(maLichChieu) {
    return async (dispatch) => {
        await axios
            .get(
                `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
            )
            .then((res) => {
                dispatch(getBookingSuccess(res.data));
                dispatch(getInfoMovieBookingSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getBookingError(err));
                dispatch(getInfoMovieBookingError(err));
            });
    };
}

export function postBookingRequest(maLichChieu, danhSachVe) {
    return async () => {
        try {
            //get user from localStorage
            const user = JSON.parse(localStorage.getItem('credentials'));
            await axios
                .post(
                    'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                    {
                        maLichChieu,
                        danhSachVe,
                        taiKhoanNguoiDung: user.taiKhoan,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        alert('Bạn đã đặt vé thành công');
                        window.location.reload();
                    }
                });
        } catch (error) {}
    };
}

const getBookingSuccess = (booking) => {
    return {
        type: 'GET_BOOKING_SUCCESS',
        payload: booking,
    };
};

const getBookingError = (error) => {
    return {
        type: 'GET_BOOKING_FAILED',
        payload: error,
    };
};

const getInfoMovieBookingSuccess = (infomovie) => {
    return {
        type: 'GET_INFO_MOVIE_BOOKING_SUCCESS',
        payload: infomovie,
    };
};

const getInfoMovieBookingError = (error) => {
    return {
        type: 'GET_INFO_MOVIE_BOOKING_FAILED',
        payload: error,
    };
};
