import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { actGetListDetailFilm } from '../../redux/actions/movie.action';

const TicketBooking = (props) => {
    const [maPhim, setmaPhim] = useState();
    const [state, setState] = useState({
        maLichChieu: '',
        maRap: '',
        dateChieu: '',
        statusFilm: false,
        statusRap: false,
        statusDate: false,
        statusSuat: false,
        statusButton: false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actGetListDetailFilm(maPhim));
    }, [maPhim]);

    //Chon Phim
    const handleOnchangeFilm = (e) => {
        if (e.target.value) {
            setmaPhim(e.target.value);
            setState({
                ...state,
                statusFilm: true,
            });
        }
    };

    const renderListFilm = () => {
        return (
            props.listFilm &&
            props.listFilm.map((item, index) => {
                return (
                    <option value={item.maPhim} key={index}>
                        {item.tenPhim}
                    </option>
                );
            })
        );
    };

    //Chon rap
    const handleOnchangeCinema = (e) => {
        setState({
            ...state,
            maRap: e.target.value,
        });
    };

    const renderRap = () => {
        return (
            props.listDetailFilm.heThongRapChieu &&
            props.listDetailFilm.heThongRapChieu.map((item, index) => {
                return (
                    <option value={item.maHeThongRap} key={index}>
                        {item.tenHeThongRap}
                    </option>
                );
            })
        );
    };

    //Chon ngay
    const handleOnchangeDate = (e) => {
        setState({
            ...state,
            dateChieu: e.target.value,
        });
    };

    const renderDay = () => {
        if (state.maRap) {
            return (
                props.listDetailFilm.heThongRapChieu &&
                props.listDetailFilm.heThongRapChieu.map((item) => {
                    if (item.maHeThongRap === state.maRap) {
                        return (
                            item.cumRapChieu &&
                            item.cumRapChieu.map((film, index) => {
                                let date = '';
                                return film.lichChieuPhim.map(
                                    (detail, index) => {
                                        if (
                                            new Date(
                                                detail.ngayChieuGioChieu
                                            ).toLocaleDateString() !== date
                                        ) {
                                            date = new Date(
                                                detail.ngayChieuGioChieu
                                            ).toLocaleDateString();
                                            return (
                                                <option
                                                    key={index}
                                                    value={new Date(
                                                        detail.ngayChieuGioChieu
                                                    ).toLocaleDateString()}
                                                >
                                                    {new Date(
                                                        detail.ngayChieuGioChieu
                                                    ).toLocaleDateString(
                                                        'vi-VN',
                                                        {
                                                            weekday: 'long',
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric',
                                                        }
                                                    )}
                                                </option>
                                            );
                                        }
                                    }
                                );
                            })
                        );
                    }
                })
            );
        }
    };

    //gio chieu
    const renderTime = () => {
        if (state.maRap) {
            return (
                props.listDetailFilm.heThongRapChieu &&
                props.listDetailFilm.heThongRapChieu.map((item) => {
                    if (item.maHeThongRap === state.maRap) {
                        return item.cumRapChieu.map((product) => {
                            return product.lichChieuPhim.map(
                                (status, index) => {
                                    if (
                                        new Date(
                                            status.ngayChieuGioChieu
                                        ).toLocaleDateString() ===
                                        state.dateChieu
                                    ) {
                                        return (
                                            <option
                                                key={index}
                                                value={status.maLichChieu}
                                            >
                                                {new Date(
                                                    status.ngayChieuGioChieu
                                                ).toLocaleTimeString('vi-VN', {
                                                    hour: '2-digit',
                                                })}{' '}
                                                Gio
                                                {new Date(
                                                    status.ngayChieuGioChieu
                                                ).toLocaleTimeString('vi-VN', {
                                                    minute: '2-digit',
                                                })}{' '}
                                                Phut
                                            </option>
                                        );
                                    }
                                }
                            );
                        });
                    }
                })
            );
        }
    };

    const handleOnchangeTime = (event) => {
        let maLichChieu = event.target.value;
        setState({
            ...state,
            maLichChieu,
            statusButton: true,
        });
    };

    return (
        <div className="ticket-booking">
            <div className="ticket-booking-group ticket-movie">
                <select
                    className="ticket-booking-select"
                    onChange={handleOnchangeFilm}
                >
                    <option value="chon-phim" style={{ display: 'none' }}>
                        Chọn phim
                    </option>
                    {renderListFilm()}
                </select>
            </div>
            <div className="ticket-booking-group ticket-cinema">
                <select
                    className="ticket-booking-select"
                    onChange={handleOnchangeCinema}
                >
                    <option value="chon-rap" style={{ display: 'none' }}>
                        Chọn rạp
                    </option>
                    {renderRap()}
                </select>
            </div>
            <div className="ticket-booking-group ticket-day">
                <select
                    className="ticket-booking-select"
                    onChange={handleOnchangeDate}
                >
                    <option value="chon-gio-chieu" style={{ display: 'none' }}>
                        Chọn ngày chiếu
                    </option>
                    {renderDay()}
                </select>
            </div>
            <div className="ticket-booking-group ticket-time">
                <select
                    className="ticket-booking-select"
                    onChange={handleOnchangeTime}
                >
                    <option value="chon-gio-chieu" style={{ display: 'none' }}>
                        Chọn giờ chiếu
                    </option>
                    {renderTime()}
                </select>
            </div>
            <div className="ticket-booking-action ticket-buying">
                <a href="/">Mua vé</a>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listFilm: state.movie.movieList,
        listDetailFilm: state.movie.listDetailFilm,
    };
};

export default connect(mapStateToProps)(TicketBooking);
