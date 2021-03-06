import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderSearch from './HeaderSearch';
import { Link, useHistory } from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

const HeaderContainer = () => {
    const [clicked, setClicked] = useState(false);
    const [clickedList, setClickedList] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    // const userIsLogin = localStorage.getItem('credentials');
    // console.log(userIsLogin);

    const credentials = useSelector((state) => state.user.credentials);
    console.log(credentials);

    const handleClickMenu = () => {
        setClicked(!clicked);
    };

    const handleClickedList = (e) => {
        setClickedList(!clickedList);
    };

    const handleShowPopupSignup = () => {
        document
            .querySelector('[rel="js-header-signup"]')
            .classList.add('active');
    };

    const handleShowPopupSignin = () => {
        document
            .querySelector('[rel="js-header-signin"]')
            .classList.add('active');
    };

    const _clearItem = () => {
        localStorage.removeItem('credentials');
        dispatch({ type: 'CLEAR_CREDENTIAL' });
        window.location.reload();
    };

    return (
        <div className="header-container">
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <div className="header-bar" onClick={handleClickMenu}>
                <i
                    className={
                        clicked
                            ? 'fa fa-times fa-lg bar-button'
                            : 'fa fa-bars fa-lg bar-button'
                    }
                ></i>
            </div>
            <div className={clicked ? 'header-menu activeMenu' : 'header-menu'}>
                <ul className="header-menu-left">
                    <li>
                        <Link className="header-menu-link active" to="/">
                            Trang ch???
                        </Link>
                    </li>
                    <li>
                        <Link className="header-menu-link" to="/phim">
                            Phim
                        </Link>
                    </li>
                    <li className="header-menu-list">
                        <a className="header-menu-link" href="/tin-tuc">
                            Tin t???c
                        </a>
                        <i
                            className="fa fa-angle-down"
                            onClick={handleClickedList}
                        ></i>
                        <ul
                            className={
                                clickedList
                                    ? 'link-news activeList'
                                    : 'link-news'
                            }
                        >
                            <li>
                                <a
                                    className="header-menu-link-news"
                                    href="/dien-anh"
                                >
                                    G??c ??i???n ???nh
                                </a>
                            </li>
                            <li>
                                <a
                                    className="header-menu-link-news"
                                    href="/su-kien"
                                >
                                    S??? ki???n
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="header-menu-link" href="/">
                            H??? tr???
                        </a>
                    </li>
                </ul>
                <ul className="header-menu-right">
                    {credentials ? (
                        <li
                            style={{ display: 'flex' }}
                            className="header-menu-item"
                        >
                            <span className="header-menu-link">
                                Hi {credentials.hoTen},
                            </span>
                            <button
                                onClick={() => _clearItem()}
                                className="btn btn-success"
                            >
                                Tho??t
                            </button>
                        </li>
                    ) : (
                        <>
                            <li className="header-menu-register">
                                <span onClick={() => handleShowPopupSignup()}>
                                    ????ng k??
                                </span>
                            </li>
                            <li className="header-menu-login">
                                <span onClick={() => handleShowPopupSignin()}>
                                    ????ng nh???p
                                </span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            <HeaderSearch />
            <div className="header-social">
                <span>Theo d??i: </span>
                <a href="/">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="/">
                    <i className="fa fa-google-plus"></i>
                </a>
                <a href="/">
                    <i className="fa fa-youtube"></i>
                </a>
            </div>
            <SignUp />
            <SignIn />
        </div>
    );
};

export default HeaderContainer;
