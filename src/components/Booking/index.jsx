import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../Header/style.css';
import './style.css';
import {
    getBookingRequest,
    postBookingRequest,
} from '../../redux/actions/booking.action';
import Footer from '../Footer';
import HeaderContainer from '../Header/HeaderContainer';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// import CountTime from '../../components/count-time';

const Booking = () => {
    const history = useHistory();
    const { maLichChieu } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.booking.danhSachGhe);
    const dataInfo = useSelector((state) => state.booking.thongTinPhim);

    const credentials = useSelector((state) => state.user.credentials);
    console.log(credentials);

    const [userIsLogin, setUserIsLogin] = useState(credentials);

    function trangThaiGhe(daDat, dangChon) {
        if (daDat) {
            return 'booking-seat-booked';
        } else {
            if (dangChon) {
                return 'booking-seat-selected';
            }
            return '';
        }
    }

    useEffect(() => {
        setUserIsLogin(credentials);
    }, [credentials]);

    useEffect(() => {
        dispatch(getBookingRequest(maLichChieu));
    }, [dispatch, maLichChieu]);

    const renderGhe = () => {
        return data?.map((ghe, index) => {
            return (
                <div
                    key={index}
                    className={`booking-seat-item ${
                        ghe.loaiGhe === 'Thuong'
                            ? 'booking-seat-normal'
                            : 'booking-seat-vip'
                    } ${trangThaiGhe(ghe.daDat, ghe.dangChon)}`}
                    onClick={() => {
                        dispatch({
                            type: 'CHON_GHE',
                            payload: ghe,
                        });
                    }}
                >
                    <span>{ghe.stt}</span>
                </div>
            );
        });
    };

    const renderMovieInfo = () => {
        const item = dataInfo;
        return (
            <div className="booking-info">
                <div className="booking-info-image">
                    <img
                        className="img-fluid"
                        src={item.hinhAnh}
                        alt={item.tenPhim}
                    />
                </div>
                <div className="booking-info-item">
                    <span>T??n phim:</span> {item.tenPhim}
                </div>
                <div className="booking-info-item">
                    <span>T??n r???p:</span> {item.tenCumRap}
                </div>
                <div className="booking-info-item">
                    <span>?????a ch???:</span> {item.diaChi}
                </div>
                <div className="booking-info-item">
                    <span>Ng??y/gi??? chi???u:</span> {item.ngayChieu} -{' '}
                    {item.gioChieu}
                </div>
            </div>
        );
    };

    //Dat ve
    function handleBooking(e) {
        let danhSachVe = data?.filter((ghe) => ghe.dangChon);
        danhSachVe = danhSachVe.map((ghe) => ({
            maGhe: ghe.maGhe,
            giaVe: ghe.giaVe,
        }));
        // console.log(danhSachVe);
        if (userIsLogin === null) {
            alert('B???n c???n ????ng nh???p t??i kho???n ????? ?????t v?? !!!');
        } else {
            if (danhSachVe.length === 0) {
                e.preventDefault();
            } else {
                confirmAlert({
                    title: 'X??c nh???n ?????t v??',
                    message: `B???n c?? ch???c mu???n ?????t v?? kh??ng ?`,
                    buttons: [
                        {
                            label: 'Yes',
                            onClick: () =>
                                dispatch(
                                    postBookingRequest(maLichChieu, danhSachVe)
                                ),
                        },
                        {
                            label: 'No',
                            onClick: () => {
                                danhSachVe = data;
                            },
                        },
                    ],
                });
            }
        }
    }

    return (
        <>
            <div className="header">
                <HeaderContainer />
            </div>
            <div className="section-container">
                <div className="container">
                    <div className="booking section-padding">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="booking-screen">M??n h??nh</div>
                                <div className="booking-seat">
                                    {renderGhe()}
                                </div>
                                <div className="booking-btn">
                                    <span onClick={handleBooking}>?????t V??</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                {renderMovieInfo()}
                                <div className="booking-type">
                                    <div className="booking-type-item">
                                        <span className="booking-type-normal"></span>
                                        Gh??? th?????ng
                                    </div>
                                    <div className="booking-type-item">
                                        <span className="booking-type-vip"></span>
                                        Gh??? VIP
                                    </div>
                                    <div className="booking-type-item">
                                        <span className="booking-type-selected"></span>
                                        Gh??? ??ang ch???n
                                    </div>
                                    <div className="booking-type-item">
                                        <span className="booking-type-booked"></span>
                                        Gh??? ???? ???????c ?????t
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>Th???i gian c??n l???i: 2 tieng</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
