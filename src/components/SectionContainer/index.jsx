import React from 'react';
import ContainerBgUp from './ContainerBgUp';
import ContainerBgDown from './ContainerBgDown';
import './style.css';

const SectionContainer = () => {
    return (
        <div className="section-container">
            <ContainerBgUp />
            <ContainerBgDown />
        </div>
    );
};

export default SectionContainer;
