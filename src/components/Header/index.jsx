import React from 'react';
import Container from './Container';
import HeaderContainer from './HeaderContainer';
import './style.css';

const Header = () => {
    return (
        <div className="header">
            <HeaderContainer />
            <Container />
        </div>
    );
};

export default Header;
