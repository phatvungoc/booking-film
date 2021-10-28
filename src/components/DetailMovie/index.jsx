import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderContainer from '../Header/HeaderContainer';
import { useParams } from 'react-router-dom';
import { getDetailMovie } from '../../redux/actions/detail.action';
import Footer from '../Footer';
import Comment from '../Comment';
import ListFilmNotSlickSlider from '../ShowMovie/ListFilmNotSlickSlider';
import SoonFilmNotSlickSlider from '../SoonMovie/SoonFilmNotSlickSlider';
import '../../grid.css';
import './styledetail.css';

const DetailMovie = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const detailMovie = useSelector((state) => state.detail.detailMovie);

    useEffect(() => {
        const str = param.maPhim;
        const id = str.substring(str.lastIndexOf('-') + 1, str.length);
        dispatch(getDetailMovie(id));
    }, [param, dispatch]);

    useEffect(() => {
        document.title = detailMovie.tenPhim;
    }, [detailMovie]);

    const [showTrailer, setShowTrailer] = useState(false);
    const onShowTrailer = () => {
        setShowTrailer(true);
    };

    return (
        <>
            <div className="header">
                <HeaderContainer />
            </div>
            <div className="container-detail">
                <div className="grid wide">
                    <div className="row detail-list-film">
                        <div className="col l-8">
                            <div className="row">
                                <div className="col l-4">
                                    <div>
                                        <img alt="" src={detailMovie.hinhAnh} />
                                    </div>
                                </div>
                                <div className="col l-8">
                                    <div className="detail-title">
                                        {detailMovie.tenPhim}
                                    </div>
                                    <div className="detail-rating">
                                        <div className="detail-rating-left">
                                            <i className="fa fa-star"></i>
                                            <div className="detail-rating-index">
                                                <span>4.1</span>
                                                /5 <br />
                                                <label className="detail-rating-rv">
                                                    56 Reviews
                                                </label>
                                            </div>
                                        </div>
                                        <div className="detail-rating-right">
                                            <span>Đánh giá:</span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <div className="detail-action">
                                        {showTrailer === false ? (
                                            <div
                                                className="detail-action-item"
                                                data-toggle="modal"
                                                data-target="#modalTrailer"
                                                onClick={onShowTrailer}
                                            >
                                                <i className="fa fa-film"></i>
                                                Trailer
                                            </div>
                                        ) : (
                                            <iframe
                                                title="title"
                                                width="560"
                                                height="315"
                                                src={detailMovie.trailer}
                                                frameborder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        <a
                                            className="detail-action-item"
                                            href="/"
                                        >
                                            <i className="fa fa-comment"></i>
                                            Bình luận
                                        </a>
                                    </div>
                                    <div className="detail-info">
                                        <li>
                                            Đạo diễn: <span>Mez Tharaton</span>
                                        </li>
                                        <li>
                                            Diễn viên:{' '}
                                            <span>
                                                Baifern Pimchanok, Thiti
                                                Mahayotaruk, Nadech Kugimiya
                                            </span>
                                        </li>
                                        <li>
                                            Quốc gia: <span>Mez Tharaton</span>
                                        </li>
                                        <li>
                                            Thể loại: <span>Mez Tharaton</span>
                                        </li>
                                        <li>
                                            Ngày giờ:{' '}
                                            <span>
                                                {new Date(
                                                    detailMovie.ngayKhoiChieu
                                                ).toLocaleDateString('vi-VN', {
                                                    weekday: 'long',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l-12">
                                    <div className="detail-desc">
                                        <h3 className="heading-left">
                                            Nội dung phim
                                        </h3>
                                        <div className="detail-desc-content">
                                            {detailMovie.moTa}
                                        </div>
                                    </div>
                                    <div id="comment" className="comment">
                                        <div className="comment-textarea">
                                            <textarea
                                                rows="4"
                                                className="comment-input"
                                                placeholder="Nhập nội dung bình luận"
                                            ></textarea>
                                        </div>
                                        <div className="comment-rating">
                                            <div>
                                                Đánh giá:
                                                <i
                                                    className="fa fa-star active"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-star"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                            <div>
                                                <button
                                                    className="comment-button"
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Bình luận
                                                </button>
                                            </div>
                                        </div>
                                        <Comment />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12 right-list-movie">
                            <div className="detail-scmovie">
                                <h3 className="heading-left">
                                    Phim đang chiếu
                                </h3>
                                <ListFilmNotSlickSlider />
                            </div>
                            <div className="detail-scmovie">
                                <h3 className="heading-left">Phim sắp chiếu</h3>
                                <SoonFilmNotSlickSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailMovie;
