import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    getBookingRequest,
    actionDetailLocation,
    actionGetListMovieByLocation,
} from '../../redux/actions/cinema.action';

const ContainerBgDown = () => {
    const [cinemaCode, setCinemaCode] = useState('BHDStar');
    const [cinemaLocationCode, setCinemaLocationCode] = useState(
        'bhd-star-cineplex-3-2'
    );
    const [dateMovie, setDateMovie] = useState('');

    const dispatch = useDispatch();
    const listCinema = useSelector((state) => state.cinema.listCinema);
    const listDetailCinema = useSelector(
        (state) => state.cinema.listDetailCinema
    );
    const listMovieDetailByLocation = useSelector(
        (state) => state.cinema.listMovieDetailByLocation
    );

    // console.log(listDetailCinema);

    useEffect(() => dispatch(getBookingRequest()), []);

    useEffect(() => {
        dispatch(actionDetailLocation(cinemaCode));
        dispatch(actionGetListMovieByLocation(cinemaCode));
    }, [cinemaCode]);

    // console.log(listMovieDetailByLocation);

    const handleClickChooseCinema = (maHeThongRap) => {
        setCinemaCode(maHeThongRap);
    };

    const handleChosenLocation = (maCumRap) => {
        setCinemaLocationCode(maCumRap);
    };

    const listCumRap =
        listMovieDetailByLocation === null
            ? ''
            : listMovieDetailByLocation[0].lstCumRap;

    // console.log(listCumRap);

    const handleChosenTimeMovie = (date) => {
        const dateDetail = new Date(date).toLocaleDateString('vi-VN', {
            weekday: 'long',
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
        });
        setDateMovie(dateDetail);
    };

    // console.log(dateMovie);

    return (
        <div className="container-bg-down">
            <div className="mvschedule-container">
                <div className="mvschedule-cinema">
                    {listCinema &&
                        listCinema.map((cinema, index) => {
                            return (
                                <div
                                    className={
                                        cinemaCode === cinema.maHeThongRap
                                            ? 'mvschedule-cinema-item active'
                                            : 'mvschedule-cinema-item'
                                    }
                                    key={index}
                                    onClick={() =>
                                        handleClickChooseCinema(
                                            cinema.maHeThongRap
                                        )
                                    }
                                >
                                    <img
                                        src={cinema.logo}
                                        alt={cinema.tenHeThongRap}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="mvschedule-location">
                    {listDetailCinema &&
                        listDetailCinema.map((location, index) => {
                            return (
                                <div
                                    className={
                                        cinemaLocationCode === location.maCumRap
                                            ? 'mvschedule-location-item active'
                                            : 'mvschedule-location-item'
                                    }
                                    key={index}
                                    onClick={() =>
                                        handleChosenLocation(location.maCumRap)
                                    }
                                >
                                    <div className="mvschedule-location-title">
                                        {location.tenCumRap}
                                    </div>
                                    <div className="mvschedule-location-desc">
                                        {location.diaChi}
                                    </div>
                                    <div className="mvschedule-location-detail">
                                        [Chi tiết]
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="mvschedule-movielist">
                    {listCumRap &&
                        listCumRap.map((item, index) => {
                            if (item.maCumRap === cinemaLocationCode) {
                                return (
                                    <div key={index}>
                                        {item.danhSachPhim.map(
                                            (movie, indexMovie) => {
                                                let date = '';
                                                return (
                                                    <div
                                                        key={indexMovie}
                                                        className="mvschedule-movielist-item"
                                                    >
                                                        <div className="mvschedule-movielist-content">
                                                            <div className="mvschedule-movielist-image">
                                                                <Link
                                                                    to={`/phim/${movie.maPhim}`}
                                                                >
                                                                    <img
                                                                        src={
                                                                            movie.hinhAnh
                                                                        }
                                                                        alt={
                                                                            movie.tenPhim
                                                                        }
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <a
                                                                    className="mvschedule-movielist-title"
                                                                    href="/phim/undefined-3637"
                                                                >
                                                                    {
                                                                        movie.tenPhim
                                                                    }
                                                                </a>
                                                                <div className="mvschedule-movielist-desc">
                                                                    Thời lượng:{' '}
                                                                    <span>
                                                                        120 phút
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {movie.lstLichChieuTheoPhim.map(
                                                                (
                                                                    xuatChieu,
                                                                    index
                                                                ) => {
                                                                    if (
                                                                        new Date(
                                                                            xuatChieu.ngayChieuGioChieu
                                                                        ).toLocaleDateString() !==
                                                                        date
                                                                    ) {
                                                                        date =
                                                                            new Date(
                                                                                xuatChieu.ngayChieuGioChieu
                                                                            ).toLocaleDateString();
                                                                        return (
                                                                            <div
                                                                                className={
                                                                                    dateMovie ===
                                                                                        new Date(
                                                                                            xuatChieu.ngayChieuGioChieu
                                                                                        ).toLocaleDateString(
                                                                                            'vi-VN',
                                                                                            {
                                                                                                weekday:
                                                                                                    'long',
                                                                                                month: 'numeric',
                                                                                                day: 'numeric',
                                                                                                year: 'numeric',
                                                                                            }
                                                                                        ) &&
                                                                                    movie
                                                                                        ? 'mvschedule-movielist-showtimes-date active'
                                                                                        : 'mvschedule-movielist-showtimes-date'
                                                                                }
                                                                                key={
                                                                                    index
                                                                                }
                                                                                onClick={() =>
                                                                                    handleChosenTimeMovie(
                                                                                        xuatChieu.ngayChieuGioChieu
                                                                                    )
                                                                                }
                                                                            >
                                                                                {new Date(
                                                                                    xuatChieu.ngayChieuGioChieu
                                                                                ).toLocaleDateString(
                                                                                    'vi-VN',
                                                                                    {
                                                                                        weekday:
                                                                                            'long',
                                                                                        month: 'numeric',
                                                                                        day: 'numeric',
                                                                                        year: 'numeric',
                                                                                    }
                                                                                )}
                                                                            </div>
                                                                        );
                                                                    }
                                                                }
                                                            )}
                                                            <div className="mvschedule-movielist-showtimes">
                                                                {movie.lstLichChieuTheoPhim.map(
                                                                    (
                                                                        xuatChieu,
                                                                        index
                                                                    ) => {
                                                                        if (
                                                                            dateMovie ===
                                                                            new Date(
                                                                                xuatChieu.ngayChieuGioChieu
                                                                            ).toLocaleDateString(
                                                                                'vi-VN',
                                                                                {
                                                                                    weekday:
                                                                                        'long',
                                                                                    month: 'numeric',
                                                                                    day: 'numeric',
                                                                                    year: 'numeric',
                                                                                }
                                                                            )
                                                                        ) {
                                                                            return (
                                                                                <Link
                                                                                    to={`/dat-ve/${xuatChieu.maLichChieu}`}
                                                                                    className="mvschedule-movielist-showtimes-item"
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                >
                                                                                    <div className="mvschedule-movielist-showtimes-content">
                                                                                        <span>
                                                                                            {new Date(
                                                                                                xuatChieu.ngayChieuGioChieu
                                                                                            ).toLocaleTimeString(
                                                                                                'vi-VN',
                                                                                                {
                                                                                                    hour: '2-digit',
                                                                                                }
                                                                                            )}

                                                                                            :
                                                                                            {new Date(
                                                                                                xuatChieu.ngayChieuGioChieu
                                                                                            ).toLocaleTimeString(
                                                                                                'vi-VN',
                                                                                                {
                                                                                                    minute: '2-digit',
                                                                                                }
                                                                                            )}
                                                                                        </span>
                                                                                        <label>
                                                                                            {' '}
                                                                                            ~{' '}
                                                                                        </label>
                                                                                        {new Date(
                                                                                            xuatChieu.ngayChieuGioChieu
                                                                                        ).toLocaleTimeString(
                                                                                            'vi-VN',
                                                                                            {
                                                                                                hour: '2-digit',
                                                                                            }
                                                                                        )}

                                                                                        :
                                                                                        {new Date(
                                                                                            xuatChieu.ngayChieuGioChieu
                                                                                        ).toLocaleTimeString(
                                                                                            'vi-VN',
                                                                                            {
                                                                                                minute: '2-digit',
                                                                                            }
                                                                                        )}
                                                                                    </div>
                                                                                </Link>
                                                                            );
                                                                        }
                                                                    }
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                );
                            }
                        })}
                </div>
            </div>
        </div>
    );
};

export default ContainerBgDown;
