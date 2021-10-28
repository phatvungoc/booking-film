import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

const StyleSlick = styled.div`
    .slick-arrow {
        display: none;
    }

    .slick-dots {
        bottom: -50px;
        text-align: center;
    }

    .slick-dots li button {
        width: 40px;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #fff;
        opacity: 1;
    }
    .slick-active button::before {
        color: #dcf836 !important;
    }
`;

const SoonMovie = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                },
            },
        ],
    };

    if (props.isLoading === false) {
        return <CircularProgress />;
    } else {
        return (
            <StyleSlick>
                <Slider {...settings}>
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
                                            <span className="film-time">
                                                {new Date(
                                                    item.ngayKhoiChieu
                                                ).toLocaleDateString('vi-VN', {
                                                    weekday: 'long',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                            <h2 className="film-title">
                                                {item.tenPhim}
                                            </h2>
                                            <span className="film-star">
                                                <i className="fa fa-star icon-star"></i>
                                                <span>{item.danhGia}/</span>
                                                10
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                </Slider>
            </StyleSlick>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        listSoonMovie: state.movie.listSoonMovie,
        isLoading: state.common.isLoading,
    };
};

export default connect(mapStateToProps)(SoonMovie);
